interface PersonP {
    name: string;
    age: number;
}
declare type MyPartial<T> = {
    [P in keyof T]?: T[P];
};
declare function updatePerson(person: PersonP, prop: Partial<PersonP>): {
    name: string;
    age: number;
};
declare const personP: PersonP;
declare const upp: {
    name: string;
    age: number;
};
