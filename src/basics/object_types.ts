// let pizzaHot: { name: string, price: number };


// pizzaHot = {
//     name: 'Bacon',
//     price: 22
// };

// OR


let pizzaHot: { name: string, price: number, getName(): string }   = {
    name: 'Bacon',
    price: 22,
    getName() {
        return pizzaHot.name;
    }
};

console.log(pizzaHot.getName());