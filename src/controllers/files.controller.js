
import httpStatus from 'http-status';

import { fileFormatter } from '../utils/index.js';
import { OK, FAILED, ERROR_NOT_EXIST } from '../constants/index.js';
import { getAllFiles, getOneFile } from '../services/files.service.js';

/**
 * Funcion para obtener todos los archivos formateadaos.
 * @param {*} req Request.
 * @param {*} res Response.
 */
const getAllFormattedFiles = async (req, res) => {
  try {
    let response = {};
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

    listOfFormattedFiles.length > 0 ? 
      response = { data: listOfFormattedFiles } : 
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

/**
 * Funcion para obtener todos los archivos sin formatear.
 * @param {*} req Request.
 * @param {*} res Response.
 */
const getAllUnformattedFiles = async (_req, res) => {
  try {
    const fileList = await getAllFiles();

    if (!fileList?.files) {
      res.status(httpStatus.NO_CONTENT).send({ statusCode: httpStatus.NO_CONTENT, statusText: OK, data: [] });
    }

    if (!fileList) {
      throw new Error(ERROR_NOT_EXIST);
    }

    res.send({ data: fileList });
  } catch (error) {
    console.log(error);
    const statusCode = error?.status || httpStatus.EXPECTATION_FAILED;
    res
      .status(statusCode)
      .send({ statusCode, statusText: FAILED, error: { error: error?.message || error }, data: [] });
  }
};

export {
  getAllFormattedFiles,
  getAllUnformattedFiles
};
