interface PersonPick {
    name: string;
    age: number;
    address: {}
}

type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}

const personPick: Pick<PersonPick, 'name' | 'age'> = {
    name: 'Allan',
    age: 33
}

console.log(personPick);
