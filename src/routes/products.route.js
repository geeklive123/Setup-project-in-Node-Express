// 3rd Party Modules 
const { Router } = require('express'); 
const ProductController=require('../controllers/product.controllers')
const router = Router(); 
router.get('/date', ProductController.getEqualProductsExp);
router.get('/dateMin', ProductController.getEqualProductsReb);
router.get('/brand', ProductController.getProductsByBrand);
router.get('/discountover ', ProductController.getProductsDiscountover);
router.get('/discountbelow ', ProductController.getProductsDiscountbelow);
router.get('/stockover', ProductController.getProductsStockover);
router.get('/stockbelow', ProductController.getProductsStockbelow);

router.get('/',ProductController.getAllProducts);
router.get('/:id',ProductController.getIdProduct);
router.post('/',ProductController.createProduct);
router.put('/:id',ProductController.updateProduct);
router.delete('/:id',ProductController.deleteProduct);

module.exports = router;
