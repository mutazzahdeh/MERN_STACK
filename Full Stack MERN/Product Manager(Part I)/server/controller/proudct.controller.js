const { Product } = require('../models/product.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
module.exports.findAllProduct = (req, res) => {
    Product.find()
      .then(allDaProduct => res.json({ users: allDaProduct }))
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
