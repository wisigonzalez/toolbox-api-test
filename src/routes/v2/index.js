import { Router } from 'express';

import { getAllFormattedFiles, getAllUnformattedFiles } from '../../controllers/files.controller.js';

const routerV2 = Router();

routerV2.get('/files/data', getAllFormattedFiles).get('/files/list', getAllUnformattedFiles);

export default routerV2;
