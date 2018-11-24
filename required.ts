interface Person {
    name: string;
    age?: number;
}

type MyRequired<T> = {
    [P in keyof T]-?: T[P]
}

function printAge(person: Required<Person>) {
     return `${person.name} is ${person.age}`; 
}


const p: Required<Person> = {
    name: 'Allan',
    age: 33
}

const age = printAge(p);