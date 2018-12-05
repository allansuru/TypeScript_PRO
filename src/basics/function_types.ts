// let sumOrOrder: Function;

// sumOrOrder = (price: number, quantity: number): number => {
//     return price * quantity;
// }

// OR

// Functions and Optional Arguments


let sumOrOrder: (price: number, quantity?: number) => number;


sumOrOrder = (price, quantity): number => {
    if (quantity) {
        return price * quantity;
    } 
    return price;
}


const soma = sumOrOrder(20,2);
const soma2 = sumOrOrder(20);

console.log(soma);
console.log(soma2);

// Typed Functions and Default Params

sumOrOrder = (price, quantity = 5): number => {
    return price * quantity;
}

const soma3 = sumOrOrder(20);
const soma4 = sumOrOrder(100, 5);
console.log(soma3);
console.log(soma4);
