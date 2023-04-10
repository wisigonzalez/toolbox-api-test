import fetch from 'node-fetch';

import { EXTERNAL_API_KEY, EXTERNAL_API_URL, ERROR_FILE_LIST, ERROR_FILE } from '../constants/index.js';

/**
 * Funcion para obtener el listado de archivos desde el API externo.
 * @returns {{files: [string]}} Retorna un objeto con la propiedad files.
 */
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

/**
 * Funcion para obtener el contenido de un archivo desde el API externo.
 * @param {string} fileName Nombre del archivo.
 * @returns {text} Retorna un texto separado por "\n" y ",". 
 */
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
