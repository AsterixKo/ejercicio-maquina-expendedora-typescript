
abstract class Product {
    private _id: number;
    private _name: string;
    private _units: number;
    private _prize: number;

    constructor(id: number, name: string, units: number, prize: number) {
        this._id = id;
        this._name = name;
        this._units = units;
        this._prize = prize;
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
}

class ProductSolid extends Product {
    private _weigth: number;
    constructor(id: number, name: string, units: number, prize: number, weigth: number) {
        super(id, name, units, prize);
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
    constructor(id: number, name: string, units: number, prize: number, ml: number) {
        super(id, name, units, prize);
        this._ml = ml;
    }

    get ml(): number {
        return this._ml;
    }
    set ml(ml: number) {
        this._ml = ml;
    }
}