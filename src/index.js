import cors from 'cors';
import express from 'express'
import swaggerUi from 'swagger-ui-express';

import { routerV1, routerV2 } from './routes/index.js'
import { v2SwaggerDocs} from './routes/v2/swagger.js';

const app = express();
const PORT = process.env.PORT || 4000;

// CORS
app.use(cors());

// ROUTES
app.use('/toolbox-api/v1', routerV1);
app.use('/toolbox-api/v2', routerV2);

app.use(express.json());

// SWAGGER v2
app.use('/toolbox-api/v2/docs', swaggerUi.serve);
app.get('/toolbox-api/v2/docs', swaggerUi.setup(v2SwaggerDocs));

v2SwaggerDocs(app, PORT);

export default app;

app.listen(PORT, () => {
  console.log(`🚀 Toolbox API is listening on port ${PORT}`)
});