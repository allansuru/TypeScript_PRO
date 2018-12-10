declare function Pizzaa(name: string): void;
declare class Sizes10 {
    sizes: Array<string>;
    constructor(sizes: Array<string>);
    availableSizes: Array<string>;
}
declare const sizes10: Sizes10;
declare class Pizzaa2 extends Sizes10 {
    readonly name: string;
    sizes: Array<string>;
    private toppings;
    constructor(name: string, sizes: Array<string>);
    addTopping(toppings: string): void;
}
declare const p: any;
declare const pp: Pizzaa2;
