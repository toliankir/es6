// const person = {
//     name: 'bob',
//     greet: function() {
//         console.log(`Hello ${this.name}`);
//         console.log(this);
//     }
// }

// const person = {
//     name: 'bob',
//     greet: () => {
//         console.log(`Hello ${this.name}`);
//         console.log(this);
//     }
// }

// const person = {
//     name: 'bob',
//     greet: function () {
//         setTimeout(function () {
//             console.log(`Hello ${this.name}`);
//             console.log(this);
//         }.bind(this), 2000);

//     }
// }
// person.greet();

let i = 5;
while (i-- > 0) {
    console.log(i);
}