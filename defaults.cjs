function defaults(obj, defaultProps) {
    // Fill in undefined properties that match properties on the `defaultProps` parameter object.
    // Return `obj`.
    // http://underscorejs.org/#defaults

    for(let k in defaultProps){
        obj[k] === undefined ? obj[k] = defaultProps[k] : obj[k] = defaultProps[k];        
    }
    return obj;
}

module.exports = defaults;