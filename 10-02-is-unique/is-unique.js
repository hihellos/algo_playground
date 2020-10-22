// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

var isUnique = function(arr) {
    let set = [...new Set(arr)];

    // if (set.length === arr.length) {
    //     return true;
    // } else {
    //     return false;
    // }

    return set.length === arr.length ?  true : false;
};
