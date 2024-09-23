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

function createProduct(req,res){
    const bodyData=req.body;
    const product=ProductService.createProduct(bodyData);
    return res.status(201).json(product);
}
function updateProduct(req, res) {
    const productId = req.params.id; // ID del producto de los parámetros de la URL
    const bodyData = req.body; // Datos actualizados del cuerpo de la solicitud

    const product = ProductService.getById(productId);
    if (!product) {
        return res.status(404).send({
            "message": "product not found"
        });
    }

    const updatedProduct = ProductService.updateProduct(productId, bodyData);
    if (!updatedProduct) {
        return res.status(404).send({
            "message": "Unable to update product"
        });
    }

    return res.status(200).json(updatedProduct); // Retornar el producto actualizado
}

function deleteProduct (){

}




const getProductsDiscountbelow = (req, res) => {
    console.log("Llamando a getProductsStockbelow");

    const minDiscount = parseFloat(req.query.minDiscount) || 0;
    console.log("Stock mínimo recibido:", minDiscount);

    const products = ProductService.getProductsStockbelow(minDiscount);
    console.log("Productos devueltos:", products);

    if (products.length > 0) {
        res.status(200).json(products);
    } else {
        res.status(404).json({ message: `No se encontraron productos con stock <= ${minDiscount}` });
    }
}

const getProductsDiscountover = (req, res) => {
    console.log("Llamando a getProductsStockover");

    const maxDiscount = parseFloat(req.query.maxDiscount) || 0;
    console.log("Stock máximo recibido:", maxDiscount);

    const products = ProductService.getProductsStockover(maxDiscount);
    console.log("Productos devueltos:", products);

    if (products.length > 0) {
        res.status(200).json(products);
    } else {
        res.status(404).json({ message: `No se encontraron productos con stock >= ${maxDiscount}` });
    }
}

const getProductsStockbelow = (req, res) => {
    console.log("Llamando a getProductsStockbelow");

    const minStock = parseFloat(req.query.minStock) || 0;
    console.log("Stock mínimo recibido:", minStock);

    const products = ProductService.getProductsStockbelow(minStock);
    console.log("Productos devueltos:", products);

    if (products.length > 0) {
        res.status(200).json(products);
    } else {
        res.status(404).json({ message: `No se encontraron productos con stock <= ${minStock}` });
    }
}

const getProductsStockover = (req, res) => {
    console.log("Llamando a getProductsStockover");

    const maxStock = parseFloat(req.query.maxStock) || 0;
    console.log("Stock máximo recibido:", maxStock);

    const products = ProductService.getProductsStockover(maxStock);
    console.log("Productos devueltos:", products);

    if (products.length > 0) {
        res.status(200).json(products);
    } else {
        res.status(404).json({ message: `No se encontraron productos con stock >= ${maxStock}` });
    }
}




const getEqualProductsExp = (req, res) => {
   
    const dateinsert = req.query.dateinsert;
    const minDate = new Date(dateinsert);

    if (isNaN(minDate.getTime())) {
        return res.status(400).json({ message: 'Fecha inválida, por favor usa un formato válido (YYYY-MM-DD)' });
    }
    const products = ProductService.getEqualDatesProductsExpireover(minDate);

    console.log(`Filtrando productos con fecha >= ${dateinsert}`);

    if (products.length > 0) {
        res.status(200).json(products);
    } else {
        res.status(404).json({ message: `No se encontraron productos con fecha >= ${minDate.toISOString().split('T')[0]}` });
    }
}

const getEqualProductsReb = (req, res) => {
   
    const dateinsert = req.query.dateinsert;
    const minDate = new Date(dateinsert);

    if (isNaN(minDate.getTime())) {
        return res.status(400).json({ message: 'Fecha inválida, por favor usa un formato válido (YYYY-MM-DD)' });
    }
    const products = ProductService.getEqualDatesProductsExpirebelow(minDate);

    console.log(`Filtrando productos con fecha <= ${dateinsert}`);

    if (products.length > 0) {
        res.status(200).json(products);
    } else {
        res.status(404).json({ message: `No se encontraron productos con fecha >= ${minDate.toISOString().split('T')[0]}` });
    }
}

const getProductsByBrand = (req, res) => {
    const brand = req.query.brand;
    if (!brand) {
        return res.status(400).json({ message: 'El parámetro brand es requerido.' });
    }
    const products = ProductService.getProductsByBrand(brand);
    if (products.length > 0) {
        res.status(200).json(products);
    } else {
        res.status(404).json({ message: `No se encontraron productos con la marca ${brand}` });
    }
};

module.exports={
    getAllProducts,
    getIdProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    getEqualProductsExp,
    getEqualProductsReb,
    getProductsByBrand,
    getProductsDiscountbelow,
    getProductsDiscountover,
    getProductsStockbelow,
    getProductsStockover 
}