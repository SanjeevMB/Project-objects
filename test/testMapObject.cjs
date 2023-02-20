let mapObject = require('../mapObject.cjs');

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

function fun (obj){
    for(let k in obj){
        if(typeof obj[k] === 'string'){
            obj[k] = obj[k] + 'Learn js';
        }else if(typeof obj[k] === 'number'){
            obj[k] = obj[k]*2;
        }
    }
    return obj;
}

let result = mapObject(testObject, fun);

console.log(result);