class Pizza {
    constructor(private name: string, private price: number) {}
}

class Carro {
    constructor(private name: string, private price: number) {}
}

class List<T> {
    private list: T[] = [];

    addItem(item: T): void {
       this.list.push(item);
    }

    getList(): T[] {
        return this.list;
    }
}



const list = new List<Pizza>();
const car = new List<Carro>();
car.addItem(new Carro("Honda", 55000));
list.addItem(new Pizza("Mussarela", 33));


const pizzas = list.getList();



class Coupon {
    constructor(private name: string) {
        
    }
}


const anotherList = new List<Coupon>();
anotherList.addItem(new Coupon('PIZZA25'));

console.log('Pizzas: ', pizzas);
console.log('Generics: ', anotherList);
console.log('Carro: ', car.getList());
