// 3rd Party Modules 
const { Router } = require('express'); 

// Local Modules 
const myController = require('../controllers/healthy'); 

// Initialization 
const router = Router(); 

// Requests 
router.get('/', myController.healthy); 

module.exports = router;
