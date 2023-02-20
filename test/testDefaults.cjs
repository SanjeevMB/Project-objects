let defaults = require('../defaults.cjs');

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

let newObject = { nationality: 'France', location: 'Paris'}

let result = defaults(testObject,newObject);

console.log(result);