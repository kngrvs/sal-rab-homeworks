
function parseProducts(json) {
    data = JSON.parse(json);
    parseProducts(data.products);
}
return products;

function renderProductsCards(json){
    clearProducts();
    products = parseProducts(json);
 }
 length = products.length;
 for (let i = 0; i < length; i += 1) {
    addProduct(products[i]);
 }