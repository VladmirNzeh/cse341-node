const express = require('express');
const router = express.Router();
const foods = require('./foods');

router.use('/foods', foods);

// router.get('/', (req,res) => {
//     res.send('Welcome to the API!');
// })


router.get('/logout', function(req, res, next) {
    req.logOut(function(err) {
        if(err) {return next(err);}
        res.redirect('/');
    });
});

module.exports = router;