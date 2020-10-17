"use strict";
class Product {
    constructor(id, name, units, prize, src) {
        this._id = id;
        this._name = name;
        this._units = units;
        this._prize = prize;
        this._src = src;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get units() {
        return this._units;
    }
    set units(units) {
        this._units = units;
    }
    get prize() {
        return this._prize;
    }
    set prize(prize) {
        this._prize;
    }
    get src() {
        return this._src;
    }
    set src(src) {
        this._src = src;
    }
    sold() {
        console.log(`El producto ${this._name} ha sido vendido`);
    }
}
class ProductSolid extends Product {
    constructor(id, name, units, prize, src, weigth) {
        super(id, name, units, prize, src);
        this._weigth = weigth;
    }
    get weigth() {
        return this._weigth;
    }
    set weigth(weigth) {
        this._weigth = weigth;
    }
}
class ProductLiquid extends Product {
    constructor(id, name, units, prize, src, ml, isAlcoholic) {
        super(id, name, units, prize, src);
        this._ml = ml;
        this._isAlcoholic = isAlcoholic;
    }
    get ml() {
        return this._ml;
    }
    set ml(ml) {
        this._ml = ml;
    }
    get isAlcoholic() {
        return this._isAlcoholic;
    }
    set isAlcoholic(isAlcoholic) {
        this._isAlcoholic = isAlcoholic;
    }
}
class CreditCard {
    constructor(cardNumber, currentAccountBalance, fullname) {
        this._cardNumber = cardNumber;
        this._currentAccountBalance = currentAccountBalance;
        this._fullname = fullname;
    }
    get cardNumber() {
        return this._cardNumber;
    }
    set cardNumber(cardNumber) {
        this._cardNumber = cardNumber;
    }
    get currentAccountBalance() {
        return this._currentAccountBalance;
    }
    set currentAccountBalance(currentAccountBalance) {
        this._currentAccountBalance = currentAccountBalance;
    }
    get fullname() {
        return this._fullname;
    }
    set fullname(fullname) {
        this._fullname = fullname;
    }
}
const creditCard1 = new CreditCard(1111111111111111, 100, 'Sherri Snyder');
const creditCard2 = new CreditCard(2222222222222222, 5, 'Irma Fletcher');
const creditCard3 = new CreditCard(3333333333333333, 10, 'Sonia Jackson');
const validCreditCards = [creditCard1, creditCard2, creditCard3];
const product1 = new ProductSolid(1, 'Oreos', 20, 1.50, 'image/oreo-transparente.png', 160);
const product2 = new ProductSolid(2, 'Cacahuetes', 20, 1.00, 'image/cacahuetes-transparente.png', 150);
const product3 = new ProductSolid(3, 'Lays Classic', 20, 1.50, 'image/lays-transparente.png', 150);
const product4 = new ProductSolid(4, 'M&Ms', 20, 1.50, 'image/emanems-transparente.png', 150);
const product5 = new ProductSolid(5, 'Mikado', 20, 1.00, 'image/mikado-transparente.png', 75);
const product6 = new ProductSolid(6, 'Pringles', 20, 1.25, 'image/pringles-transparente.png', 40);
const product7 = new ProductSolid(7, 'Donuts', 20, 1.50, 'image/donuts-transparente.png', 150);
const product8 = new ProductSolid(8, 'Palomitas', 20, 1.50, 'image/palomitas-transparente.png', 150);
const product9 = new ProductLiquid(9, 'Coca-cola', 20, 1.00, 'image/cocacola-transparente.png', 33, false);
const product10 = new ProductLiquid(10, 'Heineken', 20, 1.00, 'image/heineken-transparente.png', 33, true);
const product11 = new ProductLiquid(11, 'Pepsi', 20, 1.00, 'image/pepsi-transparente.png', 33, false);
const product12 = new ProductLiquid(12, 'Agua', 20, 0.75, 'image/agua-transparente.png', 33, false);
const products = [
    [product1, product2, product9],
    [product3, product4, product10],
    [product5, product6, product11],
    [product7, product8, product12]
];
function paintBoxes() {
    console.log('products.length', products.length);
    $('#id-machine-boxes').empty();
    let divMachineBoxes = '';
    let itemsCounter = 1;
    for (let i = 0; i < products.length; i++) {
        for (let j = 0; j < products[i].length; j++) {
            console.log('product-name', products[i][j].name);
            let divBox = '';
            if (products[i][j].units > 0) {
                divBox += `<div class="box-content item-${itemsCounter}">`;
                divBox += `<div class="box-content-image-div">`;
                divBox += `<img class="image" src="${products[i][j].src}" />`;
                divBox += `</div>`;
                divBox += `<div class="box-content-text">`;
                divBox += `<div class="box-content-text-name">${products[i][j].name}</div>`;
                divBox += `<div class="box-content-text-units">Unidades: ${products[i][j].units}</div>`;
                divBox += `<div class="box-content-text-prize">Precio: ${products[i][j].prize}</div>`;
                divBox += `</div>`;
                divBox += `</div>`;
            }
            else {
                divBox += `<div class="box-content item-${itemsCounter}">`;
                divBox += `<div class="box-content-image-div">`;
                divBox += `</div>`;
                divBox += `<div class="box-content-text">`;
                divBox += `<div class="box-content-text-no-units">No quedan unidades</div>`;
                divBox += `</div>`;
                divBox += `</div>`;
            }
            divMachineBoxes += divBox;
            itemsCounter++;
        }
    }
    $('#id-machine-boxes').append(divMachineBoxes);
}
$('#loading').show();
paintBoxes();
$('#loading').hide();
