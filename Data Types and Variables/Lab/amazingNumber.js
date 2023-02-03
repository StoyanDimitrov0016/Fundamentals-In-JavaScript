function amazingNumber(number) {
    let numInStr = String(number);
    let digitSum = 0;
    for (let i = 0; i < numInStr.length; i++) {
        digitSum += Number(numInStr[i]);
    }
    if (String(digitSum).includes("9")) {
        console.log(`${number} Amazing? True`);
    } else {
        console.log(`${number} Amazing? False`);
    }
}
amazingNumber(1233);
//An amazing number is a number whose sum of digits has 9
