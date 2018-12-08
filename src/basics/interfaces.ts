interface SizesAgain {
    sizes: string[];
}

interface PizzaAgain extends SizesAgain  {
    name: string;
    topping?: number
    getAvailableSizes(): string[];
}

interface Pizzas {
    data: PizzaAgain[];
}

let pizzaA: PizzaAgain

function createPizza(name: string, sizes: string[]): PizzaAgain {
    return {
        name,
        sizes,
        getAvailableSizes() {
            return this.sizes;
        }
    };
}

pizzaA = createPizza('Pepperoni', ['small', 'lage']);

