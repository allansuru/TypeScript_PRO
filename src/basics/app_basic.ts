const pizzas2 = [
    { name: 'Peperoni', toppings: ['peperoni'] }
]

const mappedPizzas = pizzas2.map((pizza, index) => pizza.name.toUpperCase() );

console.log(mappedPizzas);

const pizza = {
    name: 'Blazing Inferno',
    getName: () => pizza.name
}

console.log(pizza.getName())