
function reverse(str: string): string;
function reverse<T>(arr: T[]): T[]
function reverse<T>(stringOrArray: string | T[]): string | T[] {
    if (typeof stringOrArray === "string") {
        return stringOrArray
            .split('')
            .reverse()
            .join('');
    }
    return stringOrArray.slice().reverse();
}

const overloadA = reverse('Pepperoni');
console.log('OverloadA:', overloadA);

const overloadB = reverse(['bacon', 'pepperoni', 'chili', 'mushrooms']);
console.log('OverloadB: ', overloadB);
const overloadC = reverse([1, 2 ,3 ,4]);
console.log('Overload C:', overloadC);

