function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻

  height = height / 100;

  let bmi = weight / (height * height);

  let bmiCategory;
  if (bmi < 18.5) {
    bmiCategory = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    bmiCategory = "Healthy Weight";
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    bmiCategory = "Overweight";
  } else {
    bmiCategory = "Obesity";
  }

  let healthy;
  if (age >= 2 && age <= 5) {
    healthy = bmi >= 14 && bmi <= 17 ? "Healthy" : "Not Healthy";
  } else if (age >= 6 && age <= 13) {
    healthy = bmi >= 15 && bmi <= 22 ? "Healthy" : "Not Healthy";
  } else if (age >= 14 && age <= 20) {
    healthy = bmi >= 18.5 && bmi <= 24.9 ? "Healthy" : "Not Healthy";
  } else if (age >= 21 && age <= 29) {
    healthy = bmi >= 19 && bmi <= 24 ? "Healthy" : "Not Healthy";
  } else if (age >= 30 && age <= 39) {
    healthy = bmi >= 21 && bmi <= 26 ? "Healthy" : "Not Healthy";
  } else if (age >= 40 && age <= 49) {
    healthy = bmi >= 22 && bmi <= 27 ? "Healthy" : "Not Healthy";
  } else if (age >= 50 && age <= 59) {
    healthy = bmi >= 23 && bmi <= 28 ? "Healthy" : "Not Healthy";
  } else if (age >= 60) {
    healthy = bmi >= 24 && bmi <= 29 ? "Healthy" : "Not Healthy";
  } else {
    healthy = "Not Healthy";
  }

  console.log("Your BMI is:" + bmi.toFixed(2));
  console.log("BMI Category: " + bmiCategory);
  alert(healthy);
}
