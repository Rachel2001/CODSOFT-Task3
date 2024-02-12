let display = document.getElementById("display");
let historyDisplay = document.getElementById("history-display");
let history = [];

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let result = eval(display.value);
    let calculation = `${display.value} = ${result}`;
    display.value = result;
    history.unshift(calculation);
    updateHistoryDisplay();
  } catch (error) {
    display.value = "Error";
  }
}

function toggleHistory() {
  historyDisplay.classList.toggle("show-history");
  console.log("Toggle History");
}

function updateHistoryDisplay() {
  historyDisplay.innerHTML = history
    .map((entry) => `<div>${entry}</div>`)
    .join("");
}
