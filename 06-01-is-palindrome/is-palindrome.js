// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function(str) {
    // console.log(str);

    // push string backwards to new array, unshift? 
    // compare strings for match
    // return true for match

    let newStr = [];
    for (var i = 0; i < str.length; i++) {
        // console.log(str[i]); 
        newStr.push(str[i]);
    }

    newStr.reverse();
    let checkStr = newStr.join("");
    // console.log(checkStr);

    if (checkStr === str) {
        // console.log("true");
        return true; // return boolean value, not string
    } else {
        // console.log("false");
        return false;
    }
};
