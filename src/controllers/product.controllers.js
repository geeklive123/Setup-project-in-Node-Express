const ProductService =require ('../services/products.service');

function getAllProducts(req,res){
    const products=ProductService.getAllProduct()
    return res.json(products)
}
function getIdProduct(req,res){
    const productId=req.params.id
    const product=ProductService.getById(productId)
    if(!product){
        return res.status(404).send({
            "message":"product not found"
        })
    }
    return res.json(product)
}
module.exports={
    getAllProducts,
    getIdProduct
}