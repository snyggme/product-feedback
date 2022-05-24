const products = require('../utils/products')

const handleAddComment = (req, res) => {
    const { id, user, comment } = req.body;
    console.log('user', user)
    console.log('comment', comment)
    console.log(id)
    return res.json({ id: id.feedback });
    
}

module.exports = {
    handleAddComment
}