import express from 'express'

import { routerV1, routerV2 } from './routes/index.js'

const app = express();
const PORT = process.env.PORT || 3000;

// For testing purposes
app.use('/toolbox-api/v1', routerV1);
app.use('/toolbox-api/v2', routerV2);

app.listen(PORT, () => {
  console.log(`🚀 Toolbox API is listening on port ${PORT}`)
});
