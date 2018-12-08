declare type Size = 'small' | 'medium' | 'large';
declare let pizzaSize: Size;
declare const selectSizeA: (size: "small" | "medium" | "large") => void;
declare type Pizza123 = {
    name: string;
    toppings: number;
};
declare const pizza123: Pizza123;
declare const serialized: string;
declare function getNameFromJSON(obj: string): any;
declare const voltaJSON: any;
