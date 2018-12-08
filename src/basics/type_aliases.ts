type Size = 'small' | 'medium' | 'large'

let pizzaSize: Size = 'small';

const selectSizeA = (size: Size) => {
    pizzaSize = size;
}

selectSizeA('small');


// Type Assertions

type Pizza123 = { name: string, toppings: number };


const pizza123: Pizza123 = { name: 'Bacon', toppings: 123 };

console.log('Antes de serializar: ', pizza123);

const serialized = JSON.stringify(pizza123);

console.log('Depois de serializar: ', serialized);  

function getNameFromJSON(obj: string): any {
    return (<Pizza123>JSON.parse(obj));
    // return (<Pizza123>JSON.parse(obj)).name;
}

const voltaJSON = getNameFromJSON(serialized);

console.log('Transformando em JSON again: ', voltaJSON);