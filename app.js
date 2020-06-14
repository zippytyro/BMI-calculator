const weight = document.getElementById("weight");
const height = document.getElementById("height");
const bmiResult = document.getElementById("bmiResult");

// event listener
document.querySelector("button").addEventListener("click", function () {
    // calculation
    let bmi = weight.value / Math.pow(height.value, 2);
    bmi = Math.floor(bmi);
    if ((weight.value === NaN || weight.value == 0 ) || (height.value == 0 || height.value === NaN)){
        bmiResult.innerHTML = "Invalid Input. Try again.";
    } else {
        bmiResult.innerHTML = "Your BMI is " + bmi;
    }
});
