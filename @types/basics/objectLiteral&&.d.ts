declare const pizza: {
    name: string;
    price: number;
};
declare const toppings: string[];
declare const order1: {
    pizza: {
        name: string;
        price: number;
    };
    toppings: string[];
};
declare function createOrder(pizza: any, toppings: any): {
    pizza: any;
    toppings: any;
};
