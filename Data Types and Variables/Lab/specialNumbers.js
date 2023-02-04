function specialNumbers(number) {
    for (let i = 1; i <= number; i++) {
        let digitSum = 0;
        for (let j = 0; j < i.toString().length; j++) {
            digitSum += Number(i.toString()[j]);

        }
      //A special number is a number whose sum of digits is 7, 9 or 11
        if (digitSum == 5 || digitSum == 7 || digitSum == 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}
