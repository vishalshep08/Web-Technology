// Length conversion function
function convertLength() {
    const lengthInput = document.getElementById("length-input").value;
    const lengthFrom = document.getElementById("length-from").value;
    const lengthTo = document.getElementById("length-to").value;
    let result = 0;

    // Validate input
    if (isNaN(lengthInput) || lengthInput === "") {
        alert("Please enter a valid number for length.");
        return;
    }

    if (lengthFrom === "m" && lengthTo === "km") {
        result = lengthInput / 1000;
    } else if (lengthFrom === "m" && lengthTo === "mi") {
        result = lengthInput * 0.000621371;
    } else if (lengthFrom === "km" && lengthTo === "m") {
        result = lengthInput * 1000;
    } else if (lengthFrom === "km" && lengthTo === "mi") {
        result = lengthInput * 0.621371;
    } else if (lengthFrom === "mi" && lengthTo === "m") {
        result = lengthInput / 0.000621371;
    } else if (lengthFrom === "mi" && lengthTo === "km") {
        result = lengthInput / 0.621371;
    } else {
        result = lengthInput;
    }

    document.getElementById("length-result").textContent = `Result: ${result} ${lengthTo}`;
}

// Temperature conversion function
function convertTemperature() {
    const tempInput = document.getElementById("temp-input").value;
    const tempFrom = document.getElementById("temp-from").value;
    const tempTo = document.getElementById("temp-to").value;
    let result = 0;

    // Validate input
    if (isNaN(tempInput) || tempInput === "") {
        alert("Please enter a valid number for temperature.");
        return;
    }

    if (tempFrom === "C" && tempTo === "F") {
        result = (tempInput * 9 / 5) + 32;
    } else if (tempFrom === "C" && tempTo === "K") {
        result = parseFloat(tempInput) + 273.15;
    } else if (tempFrom === "F" && tempTo === "C") {
        result = (tempInput - 32) * 5 / 9;
    } else if (tempFrom === "F" && tempTo === "K") {
        result = ((tempInput - 32) * 5 / 9) + 273.15;
    } else if (tempFrom === "K" && tempTo === "C") {
        result = tempInput - 273.15;
    } else if (tempFrom === "K" && tempTo === "F") {
        result = ((tempInput - 273.15) * 9 / 5) + 32;
    } else {
        result = tempInput;
    }

    document.getElementById("temp-result").textContent = `Result: ${result} ${tempTo}`;
}
