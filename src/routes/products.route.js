// 3rd Party Modules 
const { Router } = require('express'); 


const products= require('../controllers/product.controllers');

// Initialization 
const router = Router(); 

// Requests 
router.get('/', products.get); 

module.exports = router;
