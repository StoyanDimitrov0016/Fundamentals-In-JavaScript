function ageSorter(age) {
    let personType = "out of bounds";
    if (age >= 0) {
        if (age < 3) {
            personType = "baby";
        }
        else if (age < 14) {
            personType = "child";
        }
        else if (age < 20) {
            personType = "teenager";
        }
        else if (age < 66) {
            personType = "adult";
        }
        else if (age >= 66) {
            personType = "elder";
        }
    }

    console.log(personType);
}
