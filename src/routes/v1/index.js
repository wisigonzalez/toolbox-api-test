import { Router } from 'express';

import { getAllFormattedFiles } from '../../controllers/files.controller.js';

const routerV1 = Router();

routerV1.get('/files/data', getAllFormattedFiles);

export default routerV1;
