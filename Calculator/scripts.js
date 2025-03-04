let display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = Function('"use strict"; return (' + display.value + ')')();
    } catch (error) {
        alert("Invalid Expression");
    }
}

// Keyboard Support
document.addEventListener("keydown", function(event) {
    if (/[\d+\-*/.=]/.test(event.key)) {
        event.preventDefault();
        if (event.key === "=" || event.key === "Enter") {
            calculate();
        } else {
            appendValue(event.key);
        }
    } else if (event.key === "Backspace") {
        deleteLast();
    } else if (event.key === "Escape") {
        clearDisplay();
    }
});
