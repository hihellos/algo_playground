// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function(str) {
    let words = str.split(" ");
    let capWords = [];

    for (var i = 0; i < words.length; i++) {
        let word = words[i].split("");

        word[0] = word[0].toUpperCase();

        capWords.push(word.join(""));
    }

    return capWords.join(" ");
};
