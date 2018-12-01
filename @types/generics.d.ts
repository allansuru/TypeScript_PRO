interface Person {
    name: string;
    age: number;
}
declare const person23: Person;
declare type MyReadOnly<T> = {
    readonly [P in keyof T]: T[P];
};
declare function freeze<T>(obj: T): Readonly<T>;
declare const newPerson: Readonly<Person>;
