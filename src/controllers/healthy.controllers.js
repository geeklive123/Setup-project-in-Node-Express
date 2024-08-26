// Methods to be executed on routes 

function  healthy  (req, res){ 
	res.status(200).json({
		"healt": "live",
		"status": 200,
		"message": "ok"
	})
} 

// Export of all methods as object 
module.exports = { 
	healthy
	
}
