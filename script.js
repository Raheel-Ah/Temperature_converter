
const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");

let btn = document.querySelector('.button button')

celsiusInput.addEventListener("input", convertCelsius);
fahrenheitInput.addEventListener("input", convertFahrenheit);
kelvinInput.addEventListener("input", convertKelvin);

// Celsius to Fahrenheit and Kelvin 
function convertCelsius() {
    const celsiusValue = parseFloat(celsiusInput.value);
    const fahrenheitValue = (celsiusValue * 9/5) + 32;
    const kelvinValue = celsiusValue + 273.15;

    fahrenheitInput.value = isNaN(fahrenheitValue) ? "" : fahrenheitValue.toFixed(2);
    kelvinInput.value = isNaN(kelvinValue) ? "" : kelvinValue.toFixed(2);
}

// Fahrenheit to Celsius and 
function convertFahrenheit() {
    const fahrenheitValue = parseFloat(fahrenheitInput.value);
    const celsiusValue = (fahrenheitValue - 32) * 5/9;
    const kelvinValue = (fahrenheitValue + 459.67) * 5/9;

    celsiusInput.value = isNaN(celsiusValue) ? "" : celsiusValue.toFixed(2);
    kelvinInput.value = isNaN(kelvinValue) ? "" : kelvinValue.toFixed(2);
}

// Kelvin to Celsius and Fahrenheit 
function convertKelvin() {
    const kelvinValue = parseFloat(kelvinInput.value);
    const celsiusValue = kelvinValue - 273.15;
    const fahrenheitValue = (kelvinValue * 9/5) - 459.67;

    celsiusInput.value = isNaN(celsiusValue) ? "" : celsiusValue.toFixed(2);
    fahrenheitInput.value = isNaN(fahrenheitValue) ? "" : fahrenheitValue.toFixed(2);
}

btn.addEventListener('click', ()=> {
    celsiusInput.value = ""
    fahrenheitInput.value = ""
    kelvinInput.value = ""
} )