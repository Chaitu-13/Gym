jij9ij9function calculateBMI(){

let height =
document.getElementById("height").value;

let weight =
document.getElementById("weight").value;

height = height / 100;

let bmi =
(weight / (height * height)).toFixed(2);

let status = "";

if(bmi < 18.5){
status = "Underweight";
}
else if(bmi < 25){
status = "Normal";
}
else if(bmi < 30){
status = "Overweight";
}
else{
status = "Obese";
}

document.getElementById("result").innerHTML =
`BMI: ${bmi} (${status})`;
}
