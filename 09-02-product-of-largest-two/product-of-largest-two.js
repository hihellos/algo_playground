// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

var productOfLargestTwo = function(arr) {
    // // Solution 1 with built in
    // // sort array
    // arr.sort(function(a, b) {return a - b});
    // console.log(arr);
    // // select the last 2 elements in array, .length -1, .length -2 
    // let num1 = arr[arr.length - 1];
    // let num2 = arr[arr.length - 2];
    // // do the numbers need to be unique?
    // // multiply the two numbers 
    // let product = num1 * num2;
    // // return product
    // console.log(product);
    // return product;

    // Solution 2, no built in
    let num1 = null;
    let num2 = null;

    for (var i = 0; i < arr.length; i++) {
        // take current number
        let currentNum = arr[i];

        // condition check if current num is larger than stored num; then check if current number is bigger than second largest and replace if so
        if (currentNum > num1 || num1 === null) {
            // assign second largest to previous largest
            num2 = num1;
            // assign new largest to current num
            num1 = currentNum;
        } else if (currentNum > num2 || num2 === null) {
            num2 = currentNum;
        }
    }

    return num1 * num2;
};
