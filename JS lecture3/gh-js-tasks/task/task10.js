function capsLock(str) {
    var words = [];
    if (validate() === true) {
        var arrString = arrLetters();

        arrString.forEach((word) => {
            var selection = letterSelector(word);
            words.push(selection);
        });
    }
    return words.join(" ");


    function letterSelector(word) {
        var firstLetter = word.substring(0, 1);
        var lastLetters = word.substring(1);
        if (firstLetter === firstLetter.toLowerCase() && lastLetters === lastLetters.toUpperCase()) {
            return firstLetter.toUpperCase() + lastLetters.toLowerCase();
        } else if (word === word.toUpperCase()) {
            return word.toLowerCase();
        }
        return word;
    }


    function arrLetters() {
        return str.split(" ");
    }


    function validate() {
        if (str.length < 100 && str.length > 1) {
            return true;
        } else {
            return "length of string is > 100";
        }

    }
}

// console.log(capsLock("cAPS"));
// console.log(capsLock("Lock"));
// console.log(capsLock("wHY DO wE NEED cAPS lOCK?"));
// console.log(capsLock("FuNkY iS nOt CaPs!"));


tasks.push({
    title: "cAPS lOCK",
    solution: capsLock,
    tests: capsLockTests
});
