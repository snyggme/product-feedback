// const bcrypt = require('bcryptjs/dist/bcrypt');
const products = require('../utils/products')

const handleProducts = (req, res) => {
    return res.json(products.getProducts());
}

const handleAddFeedback = (req, res) => {
    const { productId } = req.body;

    return res.json({ id: productId });
}

module.exports = {
    handleProducts,
    handleAddFeedback
}