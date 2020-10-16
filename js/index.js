"use strict";
class Product {
    constructor(id, name, units, prize) {
        this._id = id;
        this._name = name;
        this._units = units;
        this._prize = prize;
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
}
class ProductSolid extends Product {
    constructor(id, name, units, prize, weigth) {
        super(id, name, units, prize);
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
    constructor(id, name, units, prize, ml) {
        super(id, name, units, prize);
        this._ml = ml;
    }
    get ml() {
        return this._ml;
    }
    set ml(ml) {
        this._ml = ml;
    }
}
