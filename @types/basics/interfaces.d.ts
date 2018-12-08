interface SizesAgain {
    sizes: string[];
}
interface PizzaAgain extends SizesAgain {
    name: string;
    topping?: number;
    getAvailableSizes(): string[];
}
interface Pizzas {
    data: PizzaAgain[];
}
declare let pizzaA: PizzaAgain;
declare function createPizza(name: string, sizes: string[]): PizzaAgain;
