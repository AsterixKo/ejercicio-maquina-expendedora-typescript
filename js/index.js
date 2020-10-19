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
            let divBox = '';
            if (products[i][j].units > 0) {
                divBox += `<div class="box-content item-${itemsCounter}" onclick="sellProduct('${i + 1}','${j + 1}');">`;
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
function sellProduct(row, column) {
    console.log(`sellProduct: ${row} - ${column}`);
    $('#loading').show();
    $("#loading")[0].scrollIntoView();
    const inputCreditCardNumber = $('#input-credit-card-number').val();
    console.log('inputCreditCardNumber:', inputCreditCardNumber);
    if (inputCreditCardNumber === null || inputCreditCardNumber.length == 0 || inputCreditCardNumber.trim() === "" || inputCreditCardNumber.trim().length != 16) {
        console.log('empezamos a tratar el error');
        const error = 'Error: debe introducir un  numero de tarjeta de 16 dígitos';
        $("#id-machine-inputs-error").empty();
        $('#id-machine-inputs-error').append(`<p class="error">${error}</p>`);
        console.log('terminamos de tratar el error');
        $('#loading').hide();
        $("#id-machine-inputs-error")[0].scrollIntoView();
    }
    else if (isNaN(Number(inputCreditCardNumber))) {
        console.log('empezamos a tratar el error isNaN');
        const error = 'Error: debe introducir un  numero de tarjeta de 16 dígitos';
        $("#id-machine-inputs-error").empty();
        $('#id-machine-inputs-error').append(`<p class="error">${error}</p>`);
        console.log('terminamos de tratar el error isNaN');
        $('#loading').hide();
        $("#id-machine-inputs-error")[0].scrollIntoView();
    }
    else if (!isNaN(Number(inputCreditCardNumber)) && Number(inputCreditCardNumber) < 0) {
        console.log('empezamos a tratar el error !isNaN && <0');
        const error = 'Error: debe introducir un  numero de tarjeta de 16 dígitos';
        $("#id-machine-inputs-error").empty();
        $('#id-machine-inputs-error').append(`<p class="error">${error}</p>`);
        console.log('terminamos de tratar el error !isNaN && <0');
        $('#loading').hide();
        $("#id-machine-inputs-error")[0].scrollIntoView();
    }
    else {
        $("#id-machine-inputs-error").empty();
        checkPayment()
            .then(response => {
            console.log('then');
            console.log(response);
            if (response === 'Operación aceptada') {
                const creditCardPosition = isCreditCardkKnown(inputCreditCardNumber);
                if (creditCardPosition != -1) {
                    console.log('Tarjeta de credito conocida');
                    if (validCreditCards[creditCardPosition].currentAccountBalance >= products[row - 1][column - 1].prize) {
                        console.log('tiene saldo suficiente:', validCreditCards[creditCardPosition].currentAccountBalance);
                        validCreditCards[creditCardPosition].currentAccountBalance -= products[row - 1][column - 1].prize;
                        products[row - 1][column - 1].sold();
                        products[row - 1][column - 1].units -= 1;
                        paintBoxes();
                        console.log('saldo despues de compra:', validCreditCards[creditCardPosition].currentAccountBalance);
                        let contentMachineOutput = `<p>Compra realizada con exito!! Su saldo actual es ${validCreditCards[creditCardPosition].currentAccountBalance}€</p>`;
                        contentMachineOutput += `<div id="id-image-machine-output"><img class="image-machine-output" src="${products[row - 1][column - 1].src}"></div>`;
                        $("#id-machine-output-internal").empty();
                        $("#id-machine-output-internal").append(contentMachineOutput);
                    }
                    else {
                        console.log('tiene saldo insuficiente:', validCreditCards[creditCardPosition].currentAccountBalance);
                        $("#id-machine-output-internal").empty();
                        $("#id-machine-output-internal").append(`<p>Compra rechazada. Su saldo es insuficiente, tiene ${validCreditCards[creditCardPosition].currentAccountBalance}€</p>`);
                    }
                }
                else {
                    console.log('Tarjeta de credito desconocida');
                    products[row - 1][column - 1].sold();
                    products[row - 1][column - 1].units -= 1;
                    paintBoxes();
                    let contentMachineOutput = `<p>Compra realizada con exito!! Saldo desconocido</p>`;
                    contentMachineOutput += `<div id="id-image-machine-output"><img class="image-machine-output" src="${products[row - 1][column - 1].src}"></div>`;
                    $("#id-machine-output-internal").empty();
                    $("#id-machine-output-internal").append(contentMachineOutput);
                }
            }
            else {
                $("#id-machine-output-internal").empty();
                $("#id-machine-output-internal").append(`<p>${response}</p>`);
            }
            $('#loading').hide();
            $("#id-machine-output-internal")[0].scrollIntoView();
        })
            .catch(error => {
            console.log('catch');
            console.log(error);
            $("#id-machine-output-internal").empty();
            $("#id-machine-output-internal").append(`<p>${error}</p>`);
            $('#loading').hide();
            $("#id-machine-output-internal")[0].scrollIntoView();
        });
    }
}
function checkPayment() {
    return new Promise((resolve, reject) => {
        const randomNumber = getRandomInt(1, 101);
        console.log(`randomNumber: `, randomNumber);
        if (randomNumber > 10) {
            setTimeout(() => {
                resolve('Operación aceptada');
            }, 3000);
        }
        else {
            setTimeout(() => {
                resolve('Operación rechazada');
            }, 3000);
        }
    });
}
function isCreditCardkKnown(creditCardNumber) {
    let creditCardKnown = false;
    let result = -1;
    console.log('validCreditCards.length:', validCreditCards.length);
    for (let i = 0; i < validCreditCards.length && !creditCardKnown; i++) {
        if (validCreditCards[i].cardNumber == creditCardNumber) {
            creditCardKnown = true;
            result = i;
        }
    }
    return result;
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
$('#loading').show();
paintBoxes();
$('#loading').hide();
