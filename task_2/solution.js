function calcShipping(sum, min, shipping) {
    let productsSum = sum; // сумма в корзине
    let freeShippingMinSum = min; // минимальная цена для бесплатной доставки
    let shippingPrice = shipping; // стоимость доставки

    let shippingSum;
    
    if(productsSum == 0 || productsSum >= freeShippingMinSum){ 
        shippingSum = 0; 
    } else 
        shippingSum = shippingPrice; 
    
    return shippingSum;
}

function calcDiscount(sum, min, discount) {
    let productsSum = sum; // сумма в корзине
    let discountMinSum = min; // минимальная цена для скидки
    let discountPart = discount; // величина скидки в процентах

    let discountSum = 0; // создайте переменную discountSum

    if(productsSum >= discountMinSum) { // если productsSum больше или равно discountMinSum,
        discountSum = (discountPart / 100) * productsSum; // то присвойте discountSum значение discountPart процентов от productsSum,
    } else {
        discountSum = 0; // иначе присвойте discountSum значение 0
    }

    return discountSum;
}

function calcInvoice({sum, discountMinSum, discountPart, shippingFreeMinSum, shippingPrice}) {
    let productsSum = sum;
    let discountSum = calcDiscount(sum, discountMinSum, discountPart);

    let totalSum; // создайте переменную totalSum
    totalSum = productsSum; // присвойте totalSum значение productsSum
    totalSum = totalSum - discountSum; // уменьшите totalSum на discountSum

    let shippingSum = calcShipping(totalSum, shippingFreeMinSum, shippingPrice); // не изменяйте эту строку!!!

    totalSum = totalSum + shippingSum; // прибавьте к totalSum значение shippingSum

    let freeShipping = 0; // создайте переменную freeShipping
    (shippingSum == 0) ? freeShipping = true : freeShipping = false;

    // запишите без использования if или любых других условий:
    // если shippingSum равно нулю, то freeShipping должна быть равна true, иначе freeShipping должна быть равна false

    return {discount: discountSum, freeShipping, shipping: shippingSum, total: totalSum};
}
