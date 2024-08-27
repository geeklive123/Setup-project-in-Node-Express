const procuctJson=require ('../assets/supermarket_products.json')
let productData=procuctJson

function getAllProduct(){
    return productData;
}



function getById(id){
    const product =productData.find(product=>product.id==id)
    return product;
}

module.exports={
    getAllProduct,
    getById
}