function pairs(obj) {
    // Convert an object into a list of [key, value] pairs.
    // http://underscorejs.org/#pairs

    let list = [];
    for(let k in obj){
        let arr = [];
        arr.push(k);
        arr.push(obj[k]);
        list.push(arr);
    }   
    return list; 
}

module.exports = pairs;