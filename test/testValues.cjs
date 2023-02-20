let values = require('../values.cjs');

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham', func: function () { number: 101} };

let result = values(testObject);

console.log(result);