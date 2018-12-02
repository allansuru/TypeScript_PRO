function sumAll(message: string, ...arr) {
    return arr.reduce((prev, next) => prev + next);
}

const sum = sumAll('hello', 1,2,3,4,5,6,7,8,9,10);

console.log(sum);

const toppings33 = ['bacon', 'chili'];
const newToppings = ['pepperoni'];
const allToppings = [...toppings33, ...newToppings]

console.log('Spread Operator Array: ', allToppings);

// Destructuring Arrays and Objects

const pizza111 = {
    name: 'Bacon',
    toppings: ['bacon']
}

function newOrder({ name: namePizza, toppings: nameTopping }) {
  return { namePizza, nameTopping };
}

const { namePizza } = newOrder(pizza111);
console.log('My order: ', namePizza);


const toppings22 = ['pepperoni', 'bacon', 'chili'];

const [first, second, third] = toppings22;

console.log(first)

function logToppings22([first,second,third]: any ) {
   return  [first,second,third];
}
const logggg = logToppings22(toppings22);
console.log(logggg)