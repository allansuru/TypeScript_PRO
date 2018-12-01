interface Person {
    name: string;
    age22?: number;
}
declare type MyRequired<T> = {
    [P in keyof T]-?: T[P];
};
declare function printAge(person: Required<Person>): string;
