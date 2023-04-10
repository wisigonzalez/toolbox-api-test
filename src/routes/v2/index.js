import { Router } from 'express';

import { getAllFormattedFiles, getAllUnformattedFiles } from '../../controllers/files.controller.js';

const routerV2 = Router();

/**
 * @openapi
 * /toolbox-api/v2/files/data:
 *   get:
 *     summary: Obtener todos los archivos formateados.
 *     description: Obtiene una lista de todos los archivos formato.
 *     tags: [Files]
 *     parameters:
 *      - in: query
 *        name: fileName
 *        schema:
 *          type: string
 *        description: Nombre del archivo a buscar.
 *     responses:
 *       '200':
 *         description: Respuesta exitosa.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items: 
 *                      type: object
 *                      properties:
 *                          fileName:
 *                              type: string
 *                          text:
 *                              type: string
 *                          number:
 *                              type: number
 *                          hex:
 *                              type: string
 * 
 * /toolbox-api/v2/files/list:
 *   get:
 *     summary: Obtener todos los archivos sin formatear.
 *     description: Obtiene una lista de todos los archivos sin formato.
 *     tags: [Files]
 *     responses:
 *       '200':
 *         description: Respuesta exitosa.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 files:
 *                   type: array
 *                   items: 
 *                      type: string                 
 */
routerV2
    .get('/files/data', getAllFormattedFiles)
    .get('/files/list', getAllUnformattedFiles);

export default routerV2;
