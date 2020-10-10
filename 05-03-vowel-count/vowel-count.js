// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {
    // console.log(str);

    let count = 0; // holds count total
    let vowels = ["a", "e", "i", "o", "u"]; // array we need to compare letters to, increase count for match

    for (var i = 0; i < str.length; i++) {
        let letter = str[i].toLowerCase(); // convert all letters to lower so we do not miss an comps

        if (vowels.indexOf(letter) !== -1) { // indexOf method on each letter to see if match exists, for every non -1, count++
            count ++
        }
    }

    // console.log(count);
    return count;
};
