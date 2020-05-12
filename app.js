let weight = document.getElementById("weight");
let height = document.getElementById("height");
let bmiResult = document.getElementById("bmiResult");

// event listener
document.querySelector("button").addEventListener("click", function () {
    // calculation
    let bmi = weight.value / Math.pow(height.value, 2);
    bmi = Math.floor(bmi);
    if (weight.value == 0 || height.value == 0) {
        bmiResult.innerText = "Unvalid Input";
    } else {
        bmiResult.innerText = "Your BMI is " + bmi;
    }
});