const person2 = {
    name: 'Allan Passos',
    age: 32
}

type  Person2 = typeof person2;
type PersonKeys = keyof Person2;
type PersonTypes = Person2[PersonKeys];

// function getProperty(obj: object, key: string) {
//     return obj[key];
// }

// Generic
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const personName = getProperty(person2, 'name');

console.log(personName);



const anotherPerson =  {
    name: 'Toddy Motto',
    age: 27
}

console.log(typeof person2);
