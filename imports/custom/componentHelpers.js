// Some simple component helper functions

export { addStylePrefixes, delStylePropeties}

// automatically add the correct vendor prefixes
function addStylePrefixes(ref, propName, propValue) {
    ref[propName] = propValue;
    propName = propName.charAt(0).toUpperCase() + propName.substr(1);
    ref['O' + propName] = propValue;
    ref['Moz' + propName] = propValue;
    ref['ms' + propName] = propValue;
    ref['Webkit' + propName] = propValue;
}

// delete properties including vendor prefixes
function delStylePropeties(ref, propName, prefixes=false) {
    delete ref[propName];
    if (prefixes) {
        propName = propName.charAt(0).toUpperCase() + propName.substr(1);
        delete ref['O' + propName];
        delete ref['Moz' + propName];
        delete ref['ms' + propName];
        delete ref['Webkit' + propName];
    }
}
