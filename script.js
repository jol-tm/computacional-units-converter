document.querySelector('#toConvert').addEventListener('input', convert);

const toConvert = document.querySelector('#toConvert');
const converted = document.querySelector('#converted');

function convert() {
    const fromUnit = document.querySelector('#fromUnit').value;
    const toUnit = document.querySelector('#toUnit').value;

    if (fromUnit == toUnit) {
        converted.value = toConvert.value;
    } else if (fromUnit == 'Dec' && toUnit == 'Bin') {
        converted.value = decToBin(toConvert.value);
    } else if (fromUnit == 'Bin' && toUnit == 'Dec') {
        converted.value = binToDec(toConvert.value);
    } else if (fromUnit == 'Dec' && toUnit == 'Hex') {
        converted.value = decToHex(toConvert.value);
    } else if (fromUnit == 'Hex' && toUnit == 'Dec') {
        converted.value = hexToDec(toConvert.value);
    } else if (fromUnit == 'Hex' && toUnit == 'Bin') {
        converted.value = decToBin(hexToDec(toConvert.value));
    } else if (fromUnit == 'Bin' && toUnit == 'Hex') {
        converted.value = decToHex(binToDec(toConvert.value));
    }
}

function decToBin(valueToConvert) {
    let digits = [];
    let convertedValue = "";
    
    for (let i = 0; valueToConvert >= 1; i++) {
        digits[i] = valueToConvert % 2;
        valueToConvert = Math.floor(valueToConvert / 2);
    }

    for (let i = digits.length - 1; i >= 0; i--) {
        convertedValue += digits[i];
    }

    return convertedValue;
}

function binToDec(valueToConvert) {
    let convertedValue = 0;

    for (let i = valueToConvert.length - 1, j = 0; i >= 0; i--, j++) {
        convertedValue += valueToConvert[i] * (2 ** j);
    }

    return convertedValue;
}

function decToHex(valueToConvert) {
    let digits = [];
    let convertedValue = "";
    const hexChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

    for (let i = 0; valueToConvert >= 1; i++) {
        digits[i] = valueToConvert % 16;
        valueToConvert = Math.floor(valueToConvert / 16);
    }

    for (let i = digits.length - 1; i >= 0; i--) {
        convertedValue += hexChars[digits[i]];
    }

    return convertedValue;
}

function hexToDec(valueToConvert) {
    let convertedValue = 0;
    const hexChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

    for (let i = valueToConvert.length - 1, j = 0; i >= 0; i--, j++) {
        convertedValue += hexChars.indexOf(valueToConvert[i].toUpperCase()) * (16 ** j);
    }

    return convertedValue;
}