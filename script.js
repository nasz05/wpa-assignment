document.getElementById('bmiForm').addEventListener('submit', function(event) {
  event.preventDefault();

  let weight = parseFloat(document.getElementById('weight').value);
  let height = parseFloat(document.getElementById('height').value) / 100;  // convert cm to meters
  let bmi = (weight / (height * height)).toFixed(2);

  let bmiResult = document.getElementById('bmiResult');

  if (bmi < 18.5) {
    bmiResult.textContent = `Your BMI is ${bmi}, which is considered underweight.`;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    bmiResult.textContent = `Your BMI is ${bmi}, which is considered normal weight.`;
  } else if (bmi >= 25 && bmi <= 29.9) {
    bmiResult.textContent = `Your BMI is ${bmi}, which is considered overweight.`;
  } else {
    bmiResult.textContent = `Your BMI is ${bmi}, which is considered obese.`;
  }
});
