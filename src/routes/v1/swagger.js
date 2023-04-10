import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Toolbox API',
      version: '1.0.0',
      description: 'API para manejo de archivos',
    },
  },
  apis: ['src/routes/v1/index.js'],
};

const swaggerDocs = swaggerJsDoc(options);

export const v1SwaggerDocs = (app, port) => {
  app.use(
    '/toolbox-api/v1/docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocs)
  );

  app.get("/toolbox-api/v1/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });

  console.log(
    `📓 Version 1 Docs are available at http://localhost:${port}/toolbox-api/v1/docs`
  );
};
