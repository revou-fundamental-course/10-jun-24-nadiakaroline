document.addEventListener('DOMContentLoaded', function() {
    const convertButton = document.querySelectorAll('.aquamarine-color')[0];
    const resetButton = document.querySelector('.lavenderblush-color');
    const reverseButton = document.querySelectorAll('.aquamarine-color')[1];
    const celciusInput = document.querySelectorAll('textarea')[0];
    const fahrenheitInput = document.querySelectorAll('textarea')[1];
    const calculationOutput = document.querySelectorAll('textarea')[2];

    convertButton.addEventListener('click', function() {
        const celciusValue = parseFloat(celciusInput.value);
        if (!isNaN(celciusValue)) {
            const fahrenheitValue = (celciusValue * 9 / 5) + 32;
            fahrenheitInput.value = fahrenheitValue.toFixed(2);
            calculationOutput.value = $; { 'celciusValue'; }
            C = $; { 'fahrenheitValue.toFixed(2)'; }
            F;
        } else {
            alert('Please enter a valid number in the Celcius input');
        }
    });

    resetButton.addEventListener('click', function() {
        celciusInput.value = '';
        fahrenheitInput.value = '';
        calculationOutput.value = '';
    });

    reverseButton.addEventListener('click', function() {
        const fahrenheitValue = parseFloat(fahrenheitInput.value);
        if (!isNaN(fahrenheitValue)) {
            const celciusValue = (fahrenheitValue - 32) / 1.8;
            celciusInput.value = celciusValue.toFixed(2);
            calculationOutput.value = $; { 'fahrenheitValue'; }
            F = $; { celciusValue.toFixed(2); }
            C;
        } else {
            alert('Please enter a valid number in the Fahrenheit input');
        }
    });
});