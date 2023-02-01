function sumOddNums(n) {
    let oddNumSum = 0;
    let iterations = 0;
    let i = 1;
    while (iterations < n) {
        console.log(i);
        oddNumSum += i;
        i += 2;
        iterations++;
    }
    console.log("Sum:", oddNumSum);
}
sumOddNums(5)