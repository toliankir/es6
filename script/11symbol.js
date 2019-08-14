let symbol = Symbol();
console.log(symbol);

const obj = {
    login: 'name',
    [Symbol.for('password')]: 'pass',
    [Symbol.for('desc')]: 'Dscription'
}

console.log(obj[Symbol.for('password')]);

console.log(Object.getOwnPropertySymbols(obj));