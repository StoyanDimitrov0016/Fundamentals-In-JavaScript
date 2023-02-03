function login(input) {
    let isUserLogged = false;
    let name = input.shift().split("");
    let password = "";
    for (let i = name.length - 1; i >= 0; i--) {
        password += name[i];
    }
    let currentGuess = input.shift();
  //The user has 4 tries before being blocked
    for (let i = 1; i < 5; i++) {
        if (currentGuess == password) {
            isUserLogged = true;
            break;
        }
        if (i == 4) {
            continue;
        }
        console.log("Incorrect password. Try again.");
        currentGuess = input.shift();
    }
    if (isUserLogged) {
        console.log(`User ${name.join("")} logged in.`);
    } else {
        console.log(`User ${name.join("")} blocked!`);
    }
}
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);
