declare function Pizzaa(name: string): void;
declare class Sizes10 {
    sizes: Array<string>;
    constructor(sizes: Array<string>);
    availableSizes: Array<string>;
}
declare const sizes10: Sizes10;
declare class Pizzaa2 {
    readonly name: string;
    private toppings;
    constructor(name: string);
    addTopping(toppings: string): void;
}
declare const p: any;
declare const pp: Pizzaa2;
