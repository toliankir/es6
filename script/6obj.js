// let property1 = 'test',
//     property2 = 'some value';

// let obj = {
//     property1,
//     property2
// }

// console.log(obj);

//--------------------------------

// let property1 = 'test',
//     property2 = 'some value';

// let obj = {
//     property1,
//     property2,
//     show: function() {
//         console.log(`${this.property1} / ${this.property2}`);
//     }
// }

// obj.show();

//-------------------------

// let property1 = 'test',
//     property2 = 'some value';

// let obj = {
//     property1,
//     property2,
//     show() {
//         console.log(`${this.property1} / ${this.property2}`);
//     }
// }

// obj.show();

//---------------------------

// const key = 'key';

// let obj = {
//     [key]: 'test data'
// }

// console.log(obj[key]);

//-----------------------------

// function createObj(key, value) {
//     return {
//         ['#' + key]: value
//     }
// }

// const obj = createObj('key', 'value');

// console.log(obj);
// console.log(obj.#key);

//-------------------------

const obj = {

    get getData() {
        return this.data;
    },

    set setData(data) {
        this.data = data;
    }
}

obj.setData = 'test data';

console.log(obj.getData);


