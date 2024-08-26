// 3rd Party Modules 
const { Router } = require('express'); 

// Local Modules 
const myController = require('../controllers/healthy.controllers'); 
const products= require('../controllers/product.controllers');

// Initialization 
const router = Router(); 

// Requests 
router.get('/', myController.healthy); 

module.exports = router;
