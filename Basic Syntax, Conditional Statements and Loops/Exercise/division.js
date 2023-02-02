function numberDivisibility(number) {
    let divisibleNum = 0;
    if (number % 10 == 0) {
        divisibleNum = 10;
    } else if (number % 7 == 0) {
        divisibleNum = 7;
    } else if (number % 6 == 0) {
        divisibleNum = 6;
    } else if (number % 3 == 0) {
        divisibleNum = 3;
    } else if (number % 2 == 0) {
        divisibleNum = 2;
    }
    if (divisibleNum > 0) {
        console.log(`The number is divisible by ${divisibleNum}`);
    } else {
        console.log("Not divisible");
    }
}
//The program output is the highest number that the inputted number can be divided by (10,7,6,3,2)
