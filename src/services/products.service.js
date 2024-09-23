const procuctJson=require ('../assets/supermarket_products.json')
let productData=procuctJson

function getAllProduct(){
    return productData;
}



function getById(id){
    const product =productData.find(product=>product.id==id)
    return product;
}
function createProduct(product){
    productData.push(product)
    return product;
}


function updateProduct(id, updatedProductData) {
    
    if (!Array.isArray(productData)) {
        throw new Error('productData debe ser un array');
    }

    
    let updatedProduct = null;

   
    for (let i = 0; i < productData.length; i++) {
        if (productData[i].id === id) {
          
            productData[i] = { ...productData[i], ...updatedProductData };
            updatedProduct = productData[i]; 
            break; 
        }
    }

    return updatedProduct; 
}


const getProductsByPrice=(minPrice)=>{
    return procuctJson.filter(procuctJson=>procuctJson.discount=minPrice);
}
const getProductsDiscountbelow = (minDiscount) => {
    return productData.filter(product => {
        const discount = parseFloat(product.discount);
        return discount <= minDiscount;
    });
}

const getProductsDiscountover = (maxDiscount) => {
    return productData.filter(product => {
        const discount = parseFloat(product.discount); 
        return discount >= maxDiscount; 
    });
}

const getProductsStockbelow = (minStock) => {
    return productData.filter(product => {
        const stock = parseFloat(product.stock); 
        return stock <= minStock; 
    });
}

const getProductsStockover = (maxStock) => {
    return productData.filter(product => {
        const stock = parseFloat(product.stock); 
        return stock >= maxStock; 
    });
}
 
const getEqualDatesProductsExpireover  = (minDate) => {
    return productData.filter(product => {
        const productDate = new Date(product.expiration);
        return productDate >= minDate;
    });
}
const getEqualDatesProductsExpirebelow  = (minDate) => {
    return productData.filter(product => {
        const productDate = new Date(product.expiration);
        return productDate <= minDate;
    });
}

const getProductsByBrand = (brand) => {
    return productData.filter(product => product.brand === brand);
};

module.exports={
    getAllProduct,
    getById,
    createProduct,
    updateProduct,
    productData,
    getProductsByPrice,
    getEqualDatesProductsExpireover,
    getEqualDatesProductsExpirebelow,
    getProductsByBrand,
    getProductsDiscountbelow,
    getProductsDiscountover,
    getProductsStockbelow,
    getProductsStockover 
}