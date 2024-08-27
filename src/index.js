require('dotenv/config'); 
const express = require('express'); 
const myRoute = require('./routes/healthy.route');
const productRoute=require('./routes/products.route')
const app = express(); 
const PORT = process.env.PORT; 



app.use(express.json()); 
app.use('/health', myRoute); 
app.use('/products',productRoute)





app.listen(PORT, (error) => {
	if (!error) 
		console.log("Server is Successfully Running, App is listening on port " + PORT); 
	else
		console.log("Error occurred, server can't start", error); 
});
