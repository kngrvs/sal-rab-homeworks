
let data = JSON.parse(json);
let products = data.products;
return parseProducts(products);

function renderProductsCards(json){
    clearProducts();
    products = parseProducts(json);

    length = products.length;
    for (let i = 0; i < length; i += 1) {
        addProduct(products[i]);
    }
}
