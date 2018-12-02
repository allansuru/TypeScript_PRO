const pizzas2 = [
    { name: 'Peperoni', toppings: ['peperoni'] }
]

const mappedPizzas = pizzas2.map(pizza => {
    return pizza.name.toUpperCase()
});

console.log(mappedPizzas)