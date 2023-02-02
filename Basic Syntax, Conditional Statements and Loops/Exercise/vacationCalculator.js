function vacationCalculator(peopleCount, groupType, day) {
    let pricePerPerson = 0;
    if (groupType == "Students") {
        switch (day) {
            case "Friday":
                pricePerPerson = 8.45;
                break;
            case "Saturday":
                pricePerPerson = 9.80;
                break;
            case "Sunday":
                pricePerPerson = 10.46;
                break;
        }
    } else if (groupType == "Business") {
        switch (day) {
            case "Friday":
                pricePerPerson = 10.90;
                break;
            case "Saturday":
                pricePerPerson = 15.60;
                break;
            case "Sunday":
                pricePerPerson = 16;
                break;
        }
    } else if (groupType == "Regular") {
        switch (day) {
            case "Friday":
                pricePerPerson = 15;
                break;
            case "Saturday":
                pricePerPerson = 20;
                break;
            case "Sunday":
                pricePerPerson = 22.50;
                break;
        }
    }
    let totalPriceAfterDiscount = pricePerPerson * peopleCount;
    let endSum = totalPriceAfterDiscount;
  //There are three possibilities that the hotel can make a discount
    if (groupType == "Students" && peopleCount >= 30) {
        endSum *= 0.85;
    }
    if (groupType == "Business" && peopleCount >= 100) {
        endSum = pricePerPerson * (peopleCount - 10);
    }
    if (groupType == "Regular" && peopleCount >= 10 && peopleCount <= 20) {
        endSum *= 0.95;
    }
    console.log(`Total price: ${endSum.toFixed(2)}`);
}
vacationCalculator(30, "Students", "Sunday");
