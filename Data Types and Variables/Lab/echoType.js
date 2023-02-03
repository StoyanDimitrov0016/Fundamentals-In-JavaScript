function echo(inputText) {
    if (typeof (inputText) == "string" || typeof (inputText) == "number") {
        console.log(typeof inputText);
        console.log(inputText);
    } else {
        console.log(typeof inputText);
        console.log("Parameter is not suitable for printing");
    }
}
//if the input type is a string or number the function will print it, otherwise it won't
