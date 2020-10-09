// Write code to add all the numbers in `arr` and return the total

let sumArray = function(arr) {
    let result = 0; // where we begin, and store the total after each add

    for (let i = 0; i < arr.length; i++) {
        let currentNumber = arr[i]; // define the number you are at in each iteration of the loop
        console.log("current number in arr: ", currentNumber);

        result += currentNumber; // grab stored total, add current number and store new total
    }

    console.log("result: ", result);
    return result;
};