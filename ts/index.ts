
abstract class Product {
    private _id: number;
    private _name: string;
    private _units: number;
    private _prize: number;
    private _src: string;//src de la imagen

    constructor(id: number, name: string, units: number, prize: number, src: string) {
        this._id = id;
        this._name = name;
        this._units = units;
        this._prize = prize;
        this._src = src;
    }

    get id(): number {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get units(): number {
        return this._units;
    }

    set units(units: number) {
        this._units = units;
    }

    get prize(): number {
        return this._prize;
    }

    set prize(prize: number) {
        this._prize;
    }

    get src(): string {
        return this._src
    }

    set src(src: string) {
        this._src = src;
    }

    sold(): void {
        console.log(`El producto ${this._name} ha sido vendido`);
    }
}

class ProductSolid extends Product {
    private _weigth: number;
    constructor(id: number, name: string, units: number, prize: number, src: string, weigth: number) {
        super(id, name, units, prize, src);
        this._weigth = weigth;
    }

    get weigth(): number {
        return this._weigth;
    }

    set weigth(weigth: number) {
        this._weigth = weigth;
    }
}

class ProductLiquid extends Product {
    private _ml: number;
    private _isAlcoholic: boolean;
    constructor(id: number, name: string, units: number, prize: number, src: string, ml: number, isAlcoholic: boolean) {
        super(id, name, units, prize, src);
        this._ml = ml;
        this._isAlcoholic = isAlcoholic;
    }

    get ml(): number {
        return this._ml;
    }
    set ml(ml: number) {
        this._ml = ml;
    }

    get isAlcoholic(): boolean {
        return this._isAlcoholic;
    }

    set isAlcoholic(isAlcoholic: boolean) {
        this._isAlcoholic = isAlcoholic;
    }
}

class CreditCard {
    private _cardNumber: number;
    private _currentAccountBalance: number;
    private _fullname: string;

    constructor(cardNumber: number, currentAccountBalance: number, fullname: string) {
        this._cardNumber = cardNumber;
        this._currentAccountBalance = currentAccountBalance;
        this._fullname = fullname;
    }

    get cardNumber(): number {
        return this._cardNumber;
    }

    set cardNumber(cardNumber: number) {
        this._cardNumber = cardNumber;
    }

    get currentAccountBalance(): number {
        return this._currentAccountBalance;
    }

    set currentAccountBalance(currentAccountBalance: number) {
        this._currentAccountBalance = currentAccountBalance;
    }

    get fullname(): string {
        return this._fullname;
    }

    set fullname(fullname: string) {
        this._fullname = fullname;
    }
}

//Declaración de objetos
const creditCard1 = new CreditCard(1111111111111111, 100, 'Sherri Snyder');
const creditCard2 = new CreditCard(2222222222222222, 5, 'Irma Fletcher');
const creditCard3 = new CreditCard(3333333333333333, 10, 'Sonia Jackson');

//Array de tarjetas de credito validas
const validCreditCards = [creditCard1, creditCard2, creditCard3];

const product1 = new ProductSolid(1, 'Oreos', 20, 1.50, 'image/oreo-transparente.png', 160);
const product2 = new ProductSolid(2, 'Cacahuetes', 20, 1.00, 'image/cacahuetes-transparente.png', 150);
const product3 = new ProductSolid(3, 'Lays Classic', 20, 1.50, 'image/lays-transparente.png', 150);
const product4 = new ProductSolid(4, 'M&Ms', 20, 1.50, 'image/emanems-transparente.png', 150);
const product5 = new ProductSolid(5, 'Mikado', 20, 1.00, 'image/mikado-transparente.png', 75);
const product6 = new ProductSolid(6, 'Pringles', 20, 1.25, 'image/pringles-transparente.png', 40);
const product7 = new ProductSolid(7, 'Donuts', 20, 1.50, 'image/donuts-transparente.png', 150);
const product8 = new ProductSolid(8, 'Palomitas', 20, 1.50, 'image/palomitas-transparente.png', 150);
// const product9 = new ProductSolid(9, 'Ruffles Original', 20, 1.50, 'image/ruffles.png', 150);
// const product10 = new ProductSolid(10, 'Cheetos', 20, 1.50, 'image/cheetos.png', 150);
// const product11 = new ProductSolid(11, 'Doritos', 20, 1.50, 'image/doritos.png', 150);
// const product12 = new ProductSolid(12, 'KitKat', 20, 1.50, 'image/kitkat.png', 150);

const product9 = new ProductLiquid(9, 'Coca-cola', 20, 1.00, 'image/cocacola-transparente.png', 33, false);
const product10 = new ProductLiquid(10, 'Heineken', 20, 1.00, 'image/heineken-transparente.png', 33, true);
const product11 = new ProductLiquid(11, 'Pepsi', 20, 1.00, 'image/pepsi-transparente.png', 33, false);
const product12 = new ProductLiquid(12, 'Agua', 20, 0.75, 'image/agua-transparente.png', 33, false);

//Array de productos
const products = [
    [product1, product2, product9],
    [product3, product4, product10],
    [product5, product6, product11],
    [product7, product8, product12]];

function paintBoxes() {
    console.log('products.length', products.length);
    $('#id-machine-boxes').empty();
    let divMachineBoxes = '';
    let itemsCounter = 1;
    for (let i = 0; i < products.length; i++) {
        for (let j = 0; j < products[i].length; j++) {
            console.log('product-name', products[i][j].name);
            let divBox = '';
            // <div class="box-content item-1">
            //         <div class="box-content-image-div">
            //             <img class="image" src="image/oreo-transparente.png" />
            //         </div>
            //         <div class="box-content-text">
            //             <div class="box-content-text-name">Oreo</div>
            //             <div class="box-content-text-prize">1.00</div>
            //         </div>
            //     </div>
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
            } else {
                divBox += `<div class="box-content item-${itemsCounter}">`;
                divBox += `<div class="box-content-image-div">`;
                // divBox += `<img class="image" src="${products[i][j].src}" />`;
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


function sellProduct(row: number, column: number): void {
    console.log(`sellProduct: ${row} - ${column}`);

    $('#loading').show();
    checkPayment()
        .then(response => {
            console.log(response);
            $('#loading').hide();
            $("#id-machine-output-internal")[0].scrollIntoView();
        })
        .catch(error => {
            console.log(error);
            $('#loading').hide();
            $("#id-machine-output-internal")[0].scrollIntoView();
        });
        // .finally(() => {
        //     console.log('Se ha ejecutado el FINALLY');
        // });

}

function checkPayment() {
    return new Promise((resolve, reject) => {
        const randomNumber = getRandomInt(1, 101);
        console.log(`randomNumber: `, randomNumber);
        if (randomNumber > 10) {
            setTimeout(() => {
                resolve('Operación aceptada');
            }, 3000);
        } else {
            setTimeout(() => {
                resolve('Operación rechazada');
            }, 3000);
        }
    });
}

// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
}


$('#loading').show();
paintBoxes();
$('#loading').hide();

