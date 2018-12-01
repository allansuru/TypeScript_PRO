interface PersonPick {
    name: string;
    age: number;
    address: {};
}
declare type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
};
declare const personPick: Pick<PersonPick, 'name' | 'age'>;
