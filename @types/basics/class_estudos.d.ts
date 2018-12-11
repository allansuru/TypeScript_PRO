declare function Pizzaa(name: string): void;
interface SizeInterface {
    availableSizes: string[];
}
declare abstract class Sizes10 implements SizeInterface {
    protected sizes: Array<string>;
    constructor(sizes: Array<string>);
    availableSizes: Array<string>;
}
declare class Pizzaa2 extends Sizes10 {
    readonly name: string;
    sizes: Array<string>;
    private toppings;
    constructor(name: string, sizes: Array<string>);
    updateSizes(sizes: Array<string>): void;
    addTopping(toppings: string): void;
    static allSizes(): string[];
}
declare const p: any;
declare const pp: Pizzaa2;
declare const allSizes: string[];
