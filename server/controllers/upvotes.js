const products = require('../utils/products')

const handleAddUpvotes = (req, res) => {
    const { id } = req.params;
    const { productId } = req.body;
    //add upvote to the product's (productId) feedback (id)
    return res.json({ id });
}

module.exports = {
    handleAddUpvotes
}