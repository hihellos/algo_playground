// Write code to create a function that accepts a number (`n`) and returns a new number that satisfies the look-and-say-sequence

    // 1. We go through each digit of the number from left to right.

    // 2. We count the number of consecutive same digits.

    // 3. When we get to a new digit, we say the number of consecutive digits followed by the digit.

    // 4. Restart the process for the new digit.

var lookAndSay = function(n) {
    let numString = n.toString();

    // storage variables
    let result = "";
    let currentDigit = numString[0];
    let currentDigitCount = 1;

    for (var i = 1; i <= numString.length; i++) {
        let digit = numString[i];

        if (currentDigit === digit) {
            currentDigitCount++;
        } else {
            result += currentDigitCount;
            result += currentDigit;
            currentDigitCount = 1; // reset digit count for next round
            currentDigit = digit; // reset digit for next round
        }
    }

    console.log(result);
    return parseInt(result);
};
