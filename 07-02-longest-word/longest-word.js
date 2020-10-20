// Write code to create a function that accepts a string (`str`) and returns the longest word in the string

var longestWord = function(str) {
    let words = str.split(" ");

    let longestWord = words.sort(function(a, b) { // For arrays containing 10 or fewer elements, time complexity of .sort is O(n^2), and space complexity is O(1). For longer arrays time complexity is Θ(n log(n)) (average case), and space complexity is O(log(n))
        return b.length - a.length;
    })

    console.log(longestWord[0]);
    return longestWord[0];
};
