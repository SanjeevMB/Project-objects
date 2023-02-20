function keys(obj) {
    // Retrieve all the names of the object's properties.
    // Return the keys as strings in an array.
    // Based on http://underscorejs.org/#keys

    let keyStore = [];
    for(let k in obj){
        keyStore.push(k);
    }
    return keyStore;
}

module.exports = keys;


