// Write code to create a function that accepts a string (`str`) and returns the longest word in the string

var longestWord = function(str) {
    let words = str.split(" ");

    let longestWord = words.sort(function(a, b) {
        return b.length - a.length;
    })

    console.log(longestWord[0]);
    return longestWord[0];
};
