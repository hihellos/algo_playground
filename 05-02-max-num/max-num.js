// Write code to return the largest number in the given array

// sort array
// return the last index in array? 

var maxNum = function(arr) {
    arr.sort(function(a,b){return a-b}); // array sorted ascending 
    let highestNumIndex = arr.length - 1; // brute force solution

    return arr[highestNumIndex];
};
