let invert = require('../invert.cjs');

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

let result = invert(testObject);

console.log(result);