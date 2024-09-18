'use strict';

function calculateBMI(weight, height) {
    const heightInMeters = height /100;
    const bmi = weight / (heightInMeters * heightInMeters);
    return Math.round(bmi * 100) / 100;

}

function getBMICategory(bmi) {
    if (bmi <18.5) return 'Underweight';
    if (bmi <25) return 'Normal weight';
    if (bmi <30) return 'Overweight'
    return 'Obese';
}

function updateBMIResult() {
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const resultDiv = document.getElementById('result');

    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        resultDiv.innerHTML = 'Please enter valid weight and height.';
        return;
    }

    const bmi = calculateBMI(weight, height);
    const category = getBMICategory(bmi);

    resultDiv.innerHTML = `Your BMI is ${bmi}. Category: ${category}`;
}

document.addEventListener('DOMContentLoaded', () => {
    const calculateButton = document.getElementById('calculateBtn');
    calculateButton.addEventListener('click', updateBMIResult);
});

const sampleBMIs = [18.5, 22, 27, 32];

const categories = sampleBMIs.map(bmi => getBMICategory(bmi));

console.log('BMI Calculator initialized');
console.log('Sample BMIs:', sampleBMIs);
console.log('Corresponding categories:', categories);

const currentDate = new Date();
console.log('Current date:', currentDate.toLocaleDateString());
console.log('Current time:', currentDate.toLocaleDateString());