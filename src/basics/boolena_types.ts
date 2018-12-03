const pizzazinhas: number = 2;

function offerDiscount(orders: number): boolean {
    return orders >= 3;
}

if (offerDiscount(pizzazinhas)) {
    console.log(`You have a descount!`)
} else {
    console.log(`Order more than 3 pizzas for a discount`)
}