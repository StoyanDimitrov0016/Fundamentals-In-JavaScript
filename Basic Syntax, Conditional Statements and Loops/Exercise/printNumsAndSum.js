function printAndSum(startingNumber, endingNumber) {
    let sum = 0;
    let numberSequence = "";
    for (let i = startingNumber; i <= endingNumber; i++) {
        if (i < endingNumber) {
            numberSequence += `${i} `;
            sum += i;
        } else {
            numberSequence += i;
            sum += i;
        }
    }
    console.log(numberSequence);
    console.log("Sum:", sum);
}
printAndSum(5, 10);
