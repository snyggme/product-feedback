// import { getProducts } from '../../src/utils/products';
const products = require('../utils/products')

const handleProducts = (db, bcrypt) => (req, res) => {
    return res.json(products.getProducts());
}

module.exports = {
    handleProducts
}