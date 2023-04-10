import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Toolbox API',
      version: '2.0.0',
      description: 'API para manejo de archivos',
    },
  },
  apis: ['src/routes/v2/index.js'],
};

const swaggerDocs = swaggerJsDoc(options);

export const v2SwaggerDocs = (app, port) => {
  app.use(
    '/toolbox-api/v2/docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocs)
  );

  app.get("/toolbox-api/v2/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });

  console.log(
    `📓 Version 2 Docs are available at http://localhost:${port}/toolbox-api/v2/docs`
  );
};
