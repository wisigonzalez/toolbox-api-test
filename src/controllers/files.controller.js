
import httpStatus from 'http-status';

import { fileFormatter } from '../utils/index.js';
import { OK, FAILED, ERROR_NOT_EXIST } from '../constants/index.js';
import { getAllFiles, getOneFile } from '../services/files.service.js';

const getAllFormattedFiles = async (req, res) => {
  try {
    const { fileName } = req.query;

    const listOfFormattedFiles = [];

    if (fileName) {
      const fileContent = await getOneFile(fileName);
      const file = fileFormatter(fileName, fileContent);
      if (file.length > 0) {
        listOfFormattedFiles.push(...file);
      }
    } else {
      const fileList = await getAllFiles();

      if (!fileList?.files) {
        res.status(httpStatus.NO_CONTENT).send({ statusCode: httpStatus.NO_CONTENT, statusText: OK, data: [] });
      }

      if (!fileList) {
        throw new Error(ERROR_NOT_EXIST);
      }

      await Promise.all(fileList.files.map(async (fileName) => {
        const fileContent = await getOneFile(fileName);
        const file = fileFormatter(fileName, fileContent);
        if (file.length > 0) {
          listOfFormattedFiles.push(...file);
        }
      }));
    }

    let response = {};
    listOfFormattedFiles.length > 0 ? 
      response = { statusCode: httpStatus.OK, statusText: OK, data: listOfFormattedFiles } : 
      response = { statusCode: httpStatus.NO_CONTENT, statusText: OK, data: [] };

    res.send(response);
  } catch (error) {
    console.log(error);
    const statusCode = error?.status || httpStatus.EXPECTATION_FAILED;
    res
      .status(statusCode)
      .send({ statusCode, statusText: FAILED, data: { error: error?.message || error } });
  }
};

const getAllUnformattedFiles = async (req, res) => {
  try {
    const fileList = await getAllFiles();

    if (!fileList?.files) {
      res.status(httpStatus.NO_CONTENT).send({ statusCode: httpStatus.NO_CONTENT, statusText: OK, data: [] });
    }

    if (!fileList) {
      throw new Error(ERROR_NOT_EXIST);
    }

    res.send({ statusCode: httpStatus.OK, statusText: OK, data: fileList });
  } catch (error) {
    console.log(error);
    const statusCode = error?.status || httpStatus.EXPECTATION_FAILED;
    res
      .status(statusCode)
      .send({ statusCode, statusText: FAILED, data: { error: error?.message || error } });
  }
};

export {
  getAllFormattedFiles,
  getAllUnformattedFiles
};
