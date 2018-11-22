interface Person {
    name: string;
    age: number;
}

type MyPartial<T> = {
    [P in keyof T]?: T[P]
}


function updatePerson(person: Person, prop: Partial<Person>) {
    return { ...person, ...prop}
}

const person: Person = {
    name: 'Allan',
    age: 33
}


const upp = updatePerson(person, { name: 'ABC' });

console.log('Person: ', upp);