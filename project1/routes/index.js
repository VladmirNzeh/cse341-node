const routes = require('express').Router();
const contactRoutes = require('./contact');

//  Mount the contact routes at /contacts
routes.use('/contacts', contactRoutes);

//  Optional: Redirect root to Swagger UI
routes.get('/', (req, res) => {
  res.redirect('/api-docs');
});

module.exports = routes;
