const routes = require('express').Router();
const contact = require('../controllers/contact');

/**
 * @swagger
 * /contacts:
 *   get:
 *     summary: Get all contacts
 *     responses:
 *       200:
 *         description: List of contacts
 */
routes.get('/', contact.findAll);

/**
 * @swagger
 * /contacts/{email}:
 *   get:
 *     summary: Get a contact by email
 *     parameters:
 *       - name: email
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Contact found
 *       404:
 *         description: Not found
 */
routes.get('/:email', contact.findOne);

/**
 * @swagger
 * /contacts:
 *   post:
 *     summary: Create a new contact
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *               favoriteColor:
 *                 type: string
 *               birthday:
 *                 type: string
 *     responses:
 *       201:
 *         description: Contact created
 */
routes.post('/', contact.create);

/**
 * @swagger
 * /contacts/{email}:
 *   put:
 *     summary: Update a contact
 *     parameters:
 *       - name: email
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
 *     responses:
 *       200:
 *         description: Contact updated
 */
routes.put('/:email', contact.update);

/**
 * @swagger
 * /contacts/{email}:
 *   delete:
 *     summary: Delete a contact
 *     parameters:
 *       - name: email
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Contact deleted
 */
routes.delete('/:email', contact.delete);

/**
 * @swagger
 * /contacts/test-db:
 *   get:
 *     summary: Test MongoDB connection and return sample contacts
 *     responses:
 *       200:
 *         description: Connection successful
 *       500:
 *         description: Connection failed
 */
routes.get('/test-db', async (req, res) => {
  try {
    const db = req.app.locals.db;
    const contacts = await db.collection('contacts').find().limit(5).toArray();
    res.send({
      message: 'Connected to MongoDB!',
      sampleContacts: contacts
    });
  } catch (err) {
    res.status(500).send({ error: 'Database connection failed', details: err.message });
  }
});

module.exports = routes;
