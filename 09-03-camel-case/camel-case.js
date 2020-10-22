// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = function(str) {
    // store result
    let result = "";
    // string -> array of words separated by spaces -- .split(" ")
    let words = str.toLowerCase().split(" ");
    // words -> array of letters -- .split("")
    // the [0] should be capitalized -- loop starting at [1], run .toUpperCase(letter[0])
    for (var i = 0; i < words.length; i++) {
        let word = words[i];
        let letters = word.split("");

        if (i > 0) {
            letters[0] = letters[0].toUpperCase();
        }

        result += letters.join("");
    }
    // join the letter arrays to one string, no spaces -- .join() 
    // return string 
    return result;
};
