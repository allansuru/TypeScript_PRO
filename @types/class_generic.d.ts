declare class Pizza {
    private name;
    private price;
    constructor(name: string, price: number);
}
declare class Carro {
    private name;
    private price;
    constructor(name: string, price: number);
}
declare class List<T> {
    private list;
    addItem(item: T): void;
    getList(): T[];
}
declare const list: List<Pizza>;
declare const car: List<Carro>;
declare const pizzas: Pizza[];
declare class Coupon {
    private name;
    constructor(name: string);
}
declare const anotherList: List<Coupon>;
