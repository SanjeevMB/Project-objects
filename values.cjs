function values(obj) {
    // Return all of the values of the object's own properties.
    // Ignore functions
    // http://underscorejs.org/#values

    let valueStore = [];
    for(let v in obj){
        if(typeof obj[v] !== 'function'){
            valueStore.push(obj[v]);
        }
    }
    return valueStore;
}

module.exports = values;