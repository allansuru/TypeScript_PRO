interface PersonP {
    name: string;
    age: number;
}

type MyPartial<T> = {
    [P in keyof T]?: T[P]
}


function updatePerson(person: PersonP, prop: Partial<PersPersonPon>) {
    return { ...person, ...prop}
}

const personP: PersonP = {
    name: 'Allan',
    age: 33
}


const upp = updatePerson(person, { name: 'ABC' });

console.log('Person: ', upp);