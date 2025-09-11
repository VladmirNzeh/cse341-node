const routes = require('express').Router();
const temple = require('./temple');

routes.use('/temples', temple);

/**
 * @swagger
 * /:
 *   get:
 *     summary: Get API documentation link
 *     responses:
 *       200:
 *         description: Documentation URL
 */
routes.get('/', (req, res) => {
  res.send({
    documentationURL: 'https://nathanbirch.github.io/nathan-byui-api-docs',
  });
});

module.exports = routes;
