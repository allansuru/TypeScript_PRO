// let sumOrOrder: Function;

// sumOrOrder = (price: number, quantity: number): number => {
//     return price * quantity;
// }

// OR

let sumOrOrder: (price: number, quantity: number) => number;


sumOrOrder = (price, quantity): number => {
    return price * quantity;
}


const soma = sumOrOrder(20,2);

console.log(soma);