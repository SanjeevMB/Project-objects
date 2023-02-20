let keys = require('../keys.cjs');

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

let result = keys(testObject);

console.log(result);