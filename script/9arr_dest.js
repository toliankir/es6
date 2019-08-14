
// const arr = ['1 one', '2 two', '3 three', '4 four'];

// const [one, two, three, four] = arr;
// console.log(one, two, three, four);

// function test([one, two, three, four]) {
//     return [one, two, three, four];
// }

// const [v1, v2, v3, v4] = test(arr);
// console.log(v2);

// let a = 'a';
// let b = 'b' ;
// [a,b] = [b,a];
// console.log(`a - ${a}`);
// console.log(`b - ${b}`);

const obj = {
    param1: 'value1',
    param2: 'value2'
}

const { param1: p1, param2: p2, param3: p3 = 10 } = obj;
console.log(p1, p2, p3);

const obj2 = {
    login: 'login',
    password: 'pass',
    permissions: {
        read: true,
        write: false
    }
}

const {login, permissions: {read, write}} = obj2;

console.log(`User: ${login} - read:${read}, write:${write}`);