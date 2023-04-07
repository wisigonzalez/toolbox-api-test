export const isJSON = (content) => {
  try {
    JSON.parse(content)
  } catch (error) {
    return false
  }
  return true
};

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
          const file = { fileName, text, number, hex }
          arrayOfFiles.push(file)
        }
      }
    }
  })
  return arrayOfFiles;
};
