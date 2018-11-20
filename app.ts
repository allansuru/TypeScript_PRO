interface Person {
    name: string;
    age: number;
}

// interface ReadonlyPerson {
//     readonly name: string;
//     readonly age: number;
// }

const person: Person = {
    name: 'Allan',
    age: 33
}

type MyReadOnly<T> = {
    readonly [P in keyof T]: T[P]
}

function freeze<T>(obj: T): Readonly<T> { // MyReadOnly
    return Object.freeze(obj);
}




const newPerson = freeze(person);


console.log(newPerson);

