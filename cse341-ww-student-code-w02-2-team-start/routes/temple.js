const routes = require('express').Router();
const temples = require('../controllers/temple.js');

/**
 * @swagger
 * /temples:
 *  get:
 *      summary: Get all temples
 *      responses:
 *         200:
 *              description: A list of temples
 */
routes.get('/', temples.findAll);

/**
 * @swagger
 * /temples/{temples_id}:
 * get:
 *    summary: Get a temple by ID
 *   parameters:
 *       in: path
 *       required: true
 *       schema:
 *          type: string
 *    responses:
 *     200:
 *     description: Temple not found
 */
routes.get('/:temple_id', temples.findOne);

/**
 * @swagger
 * /temples:
 *  post:
 *      summary: Create a new temple
 *     requestBody:
 *        required: true
 *       content:
 *        application/json:
 *         schema:
 *          type: object
 *         properties:
 *          name:
 *           type: string
 *     reponses::
 *       201:
 *        description: Temple created successfully
 */

routes.post('/', temples.create);

/**
 * @swagger
 * /temples/{temple_id}:
 *   put:
 *     summary: Update a temple by ID
 *     parameters:
 *       - name: temple_id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               location:
 *                 type: string
 *     responses:
 *       200:
 *         description: Temple updated
 */
routes.put('/:temple_id', temples.update);

/**
 * @swagger
 * /temples/{temple_id}:
 *   delete:
 *     summary: Delete a temple by ID
 *     parameters:
 *       - name: temple_id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Temple deleted
 */
routes.delete('/:temple_id', temples.delete);

module.exports = routes;
