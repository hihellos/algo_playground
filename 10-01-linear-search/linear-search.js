// Write code to create a function that accepts an array of numbers and a target number
// if the target number is present in the array, return its index
// else return -1
// You may not use the `indexOf`, `lastIndexOf` or `includes` methods

var linearSearch = function(arr, target) {
    // // read array and look for a match that matches target
    // // store a count that represents index
    // let index = -1;

    // for (var i = 0; i < arr.length; i++) {
    //     if (arr[i] === target) {
    //         index ++;
    //     }
    // }

    // console.log(index);
    // return index;

    for (var i = 0; i < arr.length; i++) {
        let currentNum = arr[i];

        if (currentNum === target) {
            return i;
        }
    }

    return -1;
};
