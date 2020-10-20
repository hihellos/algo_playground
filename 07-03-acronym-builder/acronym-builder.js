// Write code to create a function that accepts a string and returns an acronym for the given string

var acronymBuilder = function(str) {
    let words = str.split(" ");
    console.log(words);

    let result = "";

    for (var i = 0; i < words.length; i++) {
        result += words[i].charAt(0).toUpperCase();
    }

    console.log(result);
    return result;
};
