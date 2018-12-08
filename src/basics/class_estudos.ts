// Sem usar class
function Pizzaa(name: string) {
    this.name = name;
    this.topping = [];
}

Pizzaa.prototype.addTopping = function addTopping(topping: string) {
    this.topping.push(topping);
}

//___________________________________________________________________________________________

class Sizes10 {
    constructor(public sizes: Array<string>) {}

    set availableSizes(sizes: Array<string>) {
        this.sizes = sizes;
    }

    get availableSizes() {
        return this.sizes;
    }
}

const sizes10 = new Sizes10(['small', 'medium', 'large']);

// invoke getter;
console.log('Quais tamanhos: ', sizes10.availableSizes);

// involer setter;
sizes10.availableSizes =['small', 'medium', 'large', 'veryLarge'];

console.log('Quais tamanhos: ', sizes10.availableSizes);

class Pizzaa2 {
    // public name: string;
    private toppings: string[] = [];

    constructor(readonly name: string) {
        // this.name = name;
    }

    public addTopping(toppings: string) {
        this.toppings.push(toppings);
    }
}



const p = new Pizzaa('Bacon');
p.addTopping('bacon');

// class new
const pp = new Pizzaa2('Peperoni')
pp.addTopping('pepperoni');



console.log('Via Prototype: ',p);
console.log('Via Classe: ', pp)
console.log('Name pizza da class: ', pp.name);