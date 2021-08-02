const ProductController = require('../controller/proudct.controller');
module.exports = function(app){
    app.get('/api/product/:id', ProductController.getProduct);
    app.get('/api/product', ProductController.findAllProduct);
    app.post('/api/product', ProductController.createProduct);
    app.put('/api/product/:id', ProductController.updateProduct);
    app.delete('/api/people/:id', ProductController.deleteProduct);
    
}