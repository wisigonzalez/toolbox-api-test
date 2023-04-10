/**
 * Funcion para vaidar si el contenido es o no un JSON.
 * @param {any} content Parametro a validar.
 * @returns {boolean} Retorna true si el parametro es un json y sino retornara false.
 */
export const isJSON = (content) => {
  try {
    JSON.parse(content)
  } catch (error) {
    return false
  }
  return true
};

/**
 * Funcion para formatear el contenido de cada archivo.
 * @param {string} fileName Nombre del archivo.
 * @param {string} fileContent Contenido del archivo.
 * @returns {[{fileName: string, text: string, number: number, hex: string}]} 
 * Retorna un array de objetos y si no, retorna un array vacio.
 */
export const fileFormatter = (fileName, fileContent) => {
  const arrayOfFiles = []
  const fileContentSplitted = fileContent.split('\n')
  const isDisposable = isJSON(fileContentSplitted[0])

  fileContentSplitted.forEach(line => {
    if (!isDisposable) {
      if (line.includes(fileName)) {
        const lineSplitted = line.split(',')
        const text = lineSplitted[1]
        const number = lineSplitted[2]
        const hex = lineSplitted[3]
        const isSelectable = !!(text && number && hex)
        if (isSelectable) {
          const file = { fileName, text, number: parseInt(number), hex }
          arrayOfFiles.push(file)
        }
      }
    }
  })

  return arrayOfFiles;
};
