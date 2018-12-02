// const pizzas2 = [
//     { name: 'Peperoni', toppings: ['peperoni'] }
// ]

// const mappedPizzas = pizzas2.map((pizza, index) => pizza.name.toUpperCase() );

// // console.log(mappedPizzas);

// const pizza = {
//     name: 'Blazing Inferno',
//     getName: () => pizza.name
// }

// console.log(pizza.getName())

// // Default Function parameters

// function multiply(a, b =25) {
//     return a * b;
// }

// console.log(multiply(5))

// Object literal improvements //
const pizza = {
    name: 'Pepperoni',
    price: 15,
    getName() {
        return pizza.name
    }
}

console.log('0:: ', pizza.getName())

const toppings = ['pepperoni'];

// const order1 = {
//     pizza: pizza,
//     toppings: toppings,
// };

const order1 = { pizza, toppings }
console.log('1:: ',order1)

// or

function createOrder(pizza, toppings) {
    return { pizza, toppings }
}
console.log('2:: ', createOrder(pizza, toppings))