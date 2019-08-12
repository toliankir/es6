// class Test {

//     constructor(value) {
//         this.value = value;
//     }

//     static test(i) {
//         console.log(i * i);
//     }



//     show() {
//         console.log(this.value);
//     }
// }

// //-------------------------------

// const test = new Test('Class value');
// console.log(typeof Test);

// test.show();
// console.log(test);
// console.log(test instanceof Test);
// console.log(test.value);

// const obj = {
//     value: 'Object value',
//     test: test.show
// }


// obj.test();


//--------------------------
// class NewTest extends Test {
//     constructor(value) {
//      super(value);
//     }
// }
// const newTest = new NewTest('new test variable');
// newTest.show();

//----------------------------

// class Test2 {
//     #privateValue; 
//     constructor(value) {
//         this.#privateValue = value;
//     }

//     show() {
//         console.log(this.#privateValue);
//     }
// }

// const test2 = new Test2('Privat value');
// test2.show();
// console.log(test2.#privateValue);

class Test {
    #status;

    constructor() {
        this.#status = 'constructor value';
    }

    set satus(status) {
        this.#status = status;
    }
    
    get status() {
        return this.#status;
    }

    show() {
        console.log('Status is - ' + this.#status);
    }
}

const test = new Test();
test.satus = 'setted data';
console.log(test.status);
