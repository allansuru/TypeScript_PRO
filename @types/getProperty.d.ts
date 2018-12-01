declare const person2: {
    name: string;
    age: number;
};
declare type Person2 = typeof person2;
declare type PersonKeys = keyof Person2;
declare type PersonTypes = Person2[PersonKeys];
declare function getProperty<T, K extends keyof T>(obj: T, key: K): T[K];
declare const personName: string;
declare const anotherPerson: {
    name: string;
    age: number;
};
