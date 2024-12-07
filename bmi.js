document.addEventListener('DOMContentLoaded', function () {
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const calculateBtn = document.getElementById('calculateBtn');
    const resultDiv = document.getElementById('result');

    calculateBtn.addEventListener('click', function () {
        // Get weight and height values
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value);

        // Validate inputs
        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            resultDiv.textContent = 'Please enter valid weight and height.';
            return;
        }

        // Calculate BMI (using height in meters)
        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);

        // Determine BMI category
        let category = '';
        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 25) {
            category = 'Normal weight';
        } else if (bmi >= 25 && bmi < 30) {
            category = 'Overweight';
        } else {
            category = 'Obese';
        }

        // Display result
        resultDiv.textContent = `Your BMI is ${bmi.toFixed(1)} (${category})`;
    });
});