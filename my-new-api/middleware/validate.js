const validator = require('../helpers/validate');

const saveProduct = (req, res, next) => {
    const validationRule = {
        productName: 'required|string',
        brand: 'required|string',
        price: 'required|numeric',
        category: 'required|string',
        releaseDate: 'required|date'
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
        } else {
            next();
        }
    });
};

module.exports = {
    saveProduct
};