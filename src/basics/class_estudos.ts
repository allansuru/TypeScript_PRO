// Sem usar class
function Pizzaa(name: string) {
    this.name = name;
    this.topping = [];
}

Pizzaa.prototype.addTopping = function addTopping(topping: string) {
    this.topping.push(topping);
}

//___________________________________________________________________________________________

interface SizeInterface {
    availableSizes: string[];
}

abstract class Sizes10 implements SizeInterface {
    constructor(protected sizes: Array<string>) {}
    // escrever
    set availableSizes(sizes: Array<string>) {
        this.sizes = sizes;
    }
    //ler
    get availableSizes() {
        return this.sizes;
    }
}

// const sizes10 = new Sizes10(['small', 'medium', 'large']);

// invoke getter;
 //console.log('Quais tamanhos: ', sizes10.availableSizes);

// involer setter;
 //sizes10.availableSizes =['small', 'medium', 'large', 'veryLarge'];

// console.log('Quais tamanhos: ', sizes10.availableSizes);

// Class Inheritance (Herança)
class Pizzaa2 extends Sizes10 {
    // public name: string;
    private toppings: string[] = [];

    constructor(readonly name: string, public sizes: Array<string>) {
        // this.name = name;
        super(sizes);
    }

    public updateSizes(sizes: Array<string>) {
        this.sizes = sizes;
    }

    public addTopping(toppings: string) {
        this.toppings.push(toppings);
    }

    static allSizes() {
        return ['1', '2', '3'];
    }
}



const p = new Pizzaa('Bacon');
p.addTopping('bacon');

// class new
const pp = new Pizzaa2('Peperoni1', ['small', 'large']);
pp.addTopping('pepperoni');

const allSizes = Pizzaa2.allSizes();

console.log('All Sizes Static: ',  allSizes)

console.log('Via Prototype: ',p);
console.log('Via Classe: ', pp)
console.log('Name pizza da class: ', pp.name);
console.log(pp.availableSizes);

pp.availableSizes = ['small', 'very small', 'medium', 'large', 'very large'];
// pp.updateSizes(['a']);
console.log(pp.availableSizes);