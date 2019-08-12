// function logError(code = 100, msg = 'No error message') {
//     // if (!code) {
//     //     code = 100;
//     // }
//     // if (!msg) {
//     //     msg = 'No error message';
//     // }
//     console.warn(`Error #${code}: ${msg}`)
// }

// logError();


function sum(...values) {
    // for (value in arguments) {
    //     console.log(arguments[value]);
    // }

    return values.reduce((acc, value) => {
        return acc+value;
    })
}

console.log(sum(3,2,1));