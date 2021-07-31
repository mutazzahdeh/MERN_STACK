const ProductController = require('../controller/proudct.controller');
module.exports = function(app){
    app.get('/api', ProductController.findAllProduct);
    app.post('/api/product', ProductController.createProduct);
}