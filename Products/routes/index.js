const router = require('express').Router();
const products = require('./products');

router.use('/', require('./swagger'));

router.use('/products', products);

router.get('/', (req, res) => { 
    //#swagger.tags=['Hello World']
    res.send('Hello World')

})

module.exports = router;