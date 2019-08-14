function testData(data, resolve, reject) {
    if (typeof data === 'boolean') {
        reject('wrong data');
    }
    setTimeout(() => {
        resolve(`data response: ${data}`);
    }, 2000);
}

testData('test data',
    data => console.info(data),
    err => console.warn(err));


// function testPromise(data) {
//     return new Promise(function (response, reject) {
//         if (typeof data === 'boolean') {
//             reject('wrong data type');
//         }
//         setTimeout(() => {
//             response(`data response: ${data}`);
//         }, 2000);
//     })
// }

// testPromise('test data')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// async function test() {
//     console.log(await testPromise('test data'));
// }
// test();
