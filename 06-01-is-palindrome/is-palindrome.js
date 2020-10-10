// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome
    // push string to array, reverse array
    // compare strings for match
    // return true for match

var isPalindrome = function(str) {
    let strArray = [];
    for (var i = 0; i < str.length; i++) {
        strArray.push(str[i]);
    }

    strArray.reverse();
    let checkStr = strArray.join("");

    if (checkStr === str) {
        return true; // return boolean value, not string
    } else {
        return false;
    }
};
