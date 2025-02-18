document.querySelector('#toConvert').addEventListener('input', convert);

const toConvert = document.querySelector('#toConvert');
const converted = document.querySelector('#converted');

function convert() {
    const fromUnit = document.querySelector('#fromUnit').value;
    const toUnit = document.querySelector('#toUnit').value;

    if (fromUnit == toUnit) {
        converted.value = toConvert.value;
    } else if (fromUnit == 'Dec' && toUnit == 'Bin') {
        decToBin();
    } else if (fromUnit == 'Bin' && toUnit == 'Dec') {
        binToDec();
    } else if (fromUnit == 'Dec' && toUnit == 'Hex') {
        decToHex();
    }
}

function decToBin() {
    let digits = [];
    let toConvertValue = toConvert.value;
    let convertedValue = "";
    
    for (let i = 0; toConvertValue >= 1; i++) {
        digits[i] = toConvertValue % 2;
        toConvertValue = Math.floor(toConvertValue / 2);
    }

    for (let i = digits.length - 1; i >= 0; i--) {
        convertedValue += digits[i];
    }

    converted.value = convertedValue;
}

function binToDec() {
    let toConvertValue = toConvert.value;
    let convertedValue = 0;

    for (let i = toConvertValue.length - 1; i >= 0; i--) {
        convertedValue += toConvertValue[i] * (2 ** i);
    }

    converted.value = convertedValue;
}

function decToHex() {
    let digits = [];
    let toConvertValue = toConvert.value;
    let convertedValue = "";
    const hexChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

    for (let i = 0; toConvertValue >= 1; i++) {
        digits[i] = toConvertValue % 16;
        toConvertValue = Math.floor(toConvertValue / 16);
    }

    for (let i = digits.length - 1; i >= 0; i--) {
        convertedValue += hexChars[digits[i]];
    }

    converted.value = convertedValue;
}

function hexToDec() {
    // to do
}