declare const pizza: {
    name: string;
    price: number;
    getName(): string;
};
declare const toppings: string[];
declare const order1: {
    pizza: {
        name: string;
        price: number;
        getName(): string;
    };
    toppings: string[];
};
declare function createOrder(pizza: any, toppings: any): {
    pizza: any;
    toppings: any;
};
