# Selecciona la imagen base de Node.js
FROM node:14

# Establece el directorio de trabajo
WORKDIR /toolbox-api-test

# Copia los archivos de la aplicación
COPY . .

# Instala las dependencias
RUN npm install

# Define el comando para iniciar la aplicación
CMD ["npm", "start"]