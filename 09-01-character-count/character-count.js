// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

// input: "Andie"
// output: {a: 1, n: 1, d: 1, i: 1, e: 1}

var characterCount = function(str) {
    let characters = {};

    for (var i = 0; i < str.length; i++) {
        let char = str[i];

        if (char in characters) {
            characters[char]++
        } else {
            characters[char] = 1;
        }
    }

    console.log(characters);
    return characters;
};
