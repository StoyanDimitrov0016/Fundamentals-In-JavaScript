function roundingNumber(number, precision) {
    if (precision > 15) {
        precision = 15;
    }

    let result = parseFloat((number.toFixed(precision)));
    console.log(result);
}
//I use "parseFloat" if precision make the number to have zeroes 
//after the last digit after decial point. Example: 32.4000 -> 32.4
