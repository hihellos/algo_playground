// Write code to return a new array with all of the elements in `arr` reversed.
// You may NOT use the built-in reverse method

var reverseInPlace = function(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) { // while right is > left, meaning there are still items to the right before first item 0
        let tempArr = arr[left]; // start of where we do a bunch of reassigning to assign the last item in the array to the front of array
        console.log("temp arr start: ", tempArr);
        console.log("arr left start: ", arr[left]);
        console.log("arr right start: ", arr[right]);

        arr[left] = arr[right];
        console.log("arr left after assigned to be arr right: ", arr[left]);
        console.log("arr right: ", arr[right]);
        arr[right] = tempArr; // this reassignment loops back to the tempArr
        console.log("arr right: ", arr[right]);
        console.log("temp arr: ", tempArr);

        left++;
        right--;
    }

    // console.log(arr);
    return arr;
};
