import fetch from 'node-fetch';

import { EXTERNAL_API_KEY, EXTERNAL_API_URL, ERROR_FILE_LIST, ERROR_FILE } from '../constants/index.js';

const getAllFiles = async () => {
  try {
    const response = await fetch(`${EXTERNAL_API_URL}/v1/secret/files`, {
      headers: {
        Authorization: EXTERNAL_API_KEY
      }
    })
    return await response.json()
  } catch (error) {
    console.log(error);
    throw new Error (ERROR_FILE_LIST);
  }
};

const getOneFile = async (fileName) => {
  try {
    const response = await fetch(`${EXTERNAL_API_URL}/v1/secret/file/${fileName}`, {
      headers: {
        Authorization: EXTERNAL_API_KEY
      }
    })

    return await response.text()
  } catch (error) {
    console.log(error);
    throw new Error (ERROR_FILE)
  }
};

export { getAllFiles, getOneFile };
