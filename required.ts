interface Person {
    name: string;
    age22?: number;
}

type MyRequired<T> = {
    [P in keyof T]-?: T[P]
}

function printAge(person: Required<Person>) {
     return `${person.name} is ${person.age22}`; 
}


// const p: Required<Person> = {
//     name: 'Allan',
//     age22: 33
// }

//const age = printAge(p);