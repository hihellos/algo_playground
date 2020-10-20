// Write code to create a function takes a string and returns the string with all of the letter cases swapped

var swapCase = function(str) {
    let result = "";

    for (var i = 0; i < str.length; i++){
        let letter = str[i];

        if (letter === letter.toUpperCase()) {
            result += letter.toLowerCase();
        } else {
            result += letter.toUpperCase();
        }
    }
    
    console.log(result);
    return result;
};
