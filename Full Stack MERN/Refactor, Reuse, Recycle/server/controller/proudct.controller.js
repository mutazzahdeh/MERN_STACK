const { Product } = require('../models/product.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
module.exports.findAllProduct = (req, res) => {
    Product.find()
      .then(product => res.json(product))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };
    // The method below is new
module.exports.createProduct = (request, response) => {
    const { title, price, desc } = request.body;
    Product.create({
        title,
        price,
        desc
    })
        .then(Product => response.json(Product))
        .catch(err => response.json(err));

}

module.exports.getProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(product => response.json(product))
        .catch(err => response.json(err))
}
module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedProduct => response.json(updatedProoduct))
        .catch(err => response.json(err))
}

module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}