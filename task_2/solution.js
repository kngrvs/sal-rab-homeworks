function calcShipping(sum, min, shipping) {
    let productsSum = sum; // сумма в корзине
    let freeShippingMinSum = min; // минимальная цена для бесплатной доставки
    let shippingPrice = shipping; // стоимость доставки

    let shippingSum = 0; // создайте переменную shippingSum
    if(productsSum = 0){ // если productsSum равно 0,
        shippingSum = 0; // то shippingSum присвоить значение 0
    } else if(productsSum >= freeShippingMinSum){ // если productsSum Больше или равна freeShippingMinSum,
        shippingSum = 0; // то shippingSum присвоить значение 0
    } else if(0 < productsSum < freeShippingMinSum){ // если productsSum больше 0 и меньше freeShippingMinSum,
        shippingSum = shippingPrice; // то shippingSum присвоить значение shippingPrice
    }
   
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

    let totalSum = 0; // создайте переменную totalSum
    totalSum = productsSum; // присвойте totalSum значение productsSum
    totalSum = totalSum - discountSum; // уменьшите totalSum на discountSum

    let shippingSum = calcShipping(totalSum, shippingFreeMinSum, shippingPrice); // не изменяйте эту строку!!!

    totalSum = totalSum + shippingSum; // прибавьте к totalSum значение shippingSum

    let freeShipping = 0; // создайте переменную freeShipping
    freeShipping = !Boolean(shippingSum);
    
    // запишите без использования if или любых других условий:
    // если shippingSum равно нулю, то freeShipping должна быть равна true, иначе freeShipping должна быть равна false

    return {discount: discountSum, freeShipping, shipping: shippingSum, total: totalSum};
}
