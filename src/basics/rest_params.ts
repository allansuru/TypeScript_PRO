function sumAll(message: string, ...arr) {
    return arr.reduce((prev, next) => prev + next);
}

const sum = sumAll('hello', 1,2,3,4,5,6,7,8,9,10);

console.log(sum);