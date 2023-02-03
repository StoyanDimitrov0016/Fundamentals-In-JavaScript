function triangleOfNumbers(number) {
    for (let i = 1; i <= number; i++) {
        let output = "";
        for (let j = i; j < i * 2; j++) {
            if (j < i * 2) {
                output += `${i} `;
            } else {
                output += i;
            }

        }
        console.log(output);
    }
}
