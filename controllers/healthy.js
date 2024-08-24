// Methods to be executed on routes 

function  healthy  (req, res){ 
	res.status(200).json({
		status:"oks"
	})
} 

// Export of all methods as object 
module.exports = { 
	healthy
	
}
