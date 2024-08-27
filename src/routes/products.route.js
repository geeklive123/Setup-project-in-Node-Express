// 3rd Party Modules 
const { Router } = require('express'); 
const ProductController=require('../controllers/product.controllers')
const router = Router(); 

router.get('/',ProductController.getAllProducts);
router.get('/:id',ProductController.getIdProduct);

module.exports = router;
