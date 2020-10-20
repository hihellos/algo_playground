// Write code to create a function that returns the factorial of `num`
    // first define all positive int leading up to num
    // multiply each number in sequence 
var factorial = function(num) {
    let result = 1;

    for (var i = num; i > 1; i--) {
        result = result * i;
    }

    return result;
};
