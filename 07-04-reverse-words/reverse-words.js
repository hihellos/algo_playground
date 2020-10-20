// Write code to create a function that accepts a string (`str`) and reverses the order of the words in the string

var reverseWords = function(str) {
    let words = str.split(" ");
    let reverse = words.reverse().join(" ");
    
    return reverse;
};
