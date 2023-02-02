function leapYear(year) {
    outputText = "no";
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        outputText = "yes";
    }
    console.log(outputText);
}
