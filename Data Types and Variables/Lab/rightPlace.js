function rightPlace(checkedWord, char, referenceWord) {
    let constructedWord = checkedWord.replace("_", char);
    if (constructedWord == referenceWord) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }
}
/*The first string will be a word with a missing char replaced with an underscore '_'. 
You have to replace the missing character (underscore) of the first string with the 
character passed as the second parameter and compare the result with the second string.
If they are equals, you should print "Matched", otherwise print "Not Matched".*/
