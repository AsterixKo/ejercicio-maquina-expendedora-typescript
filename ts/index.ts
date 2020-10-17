
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
    constructor(id: number, name: string, units: number, prize: number, src: string, ml: number) {
        super(id, name, units, prize, src);
        this._ml = ml;
    }

    get ml(): number {
        return this._ml;
    }
    set ml(ml: number) {
        this._ml = ml;
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

const product1 = new ProductSolid(1, 'Oreos', 20, 1.50, 'image/oreo.png', 160);
const product2 = new ProductSolid(2, 'Cacahuetes', 20, 1.00, 'image/cacahuetes.png', 150);
const product3 = new ProductSolid(3, 'Lays Classic', 20, 1.50, 'image/lays.png', 150);
const product4 = new ProductSolid(4, 'M&Ms', 20, 1.50, 'image/emanems.png', 150);
const product5 = new ProductSolid(5, 'Mikado', 20, 1.00, 'image/mikado.png', 75);
const product6 = new ProductSolid(6, 'Pringles', 20, 1.25, 'image/pringles.png', 40);
const product7 = new ProductSolid(7, 'Donuts', 20, 1.50, 'image/donuts.png', 150);
const product8 = new ProductSolid(8, 'Palomitas', 20, 1.50, 'image/palomitas.png', 150);
const product9 = new ProductSolid(9, 'Ruffles Original', 20, 1.50, 'image/ruffles.png', 150);
const product10 = new ProductSolid(10, 'Cheetos', 20, 1.50, 'image/cheetos.png', 150);
const product11 = new ProductSolid(11, 'Doritos', 20, 1.50, 'image/doritos.png', 150);
const product12 = new ProductSolid(12, 'KitKat', 20, 1.50, 'image/kitkat.png', 150);

const product13 = new ProductLiquid(13, 'Coca-cola', 20, 1.00, 'image/cocacola.png', 33);
const product14 = new ProductLiquid(14, 'Fanta limón', 20, 1.00, 'image/fantalimon.png', 33);
const product15 = new ProductLiquid(15, 'Pepsi', 20, 1.00, 'image/pepsi.png', 33);
const product16 = new ProductLiquid(16, 'Agua', 20, 0.75, 'image/agua.png', 33);

//Array de productos
const products = [
    [product1, product2, product3, product13],
    [product4, product5, product6, product14],
    [product7, product8, product9, product15],
    [product10, product11, product12, product16]];

$('#loading').show();
$('#loading').hide();