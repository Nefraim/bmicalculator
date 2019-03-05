const bmiCalculator = (weight, height) => {
    let bmi = weight / Math.pow(height,2);
    if(bmi <= 18.5) {
        return "Your BMI is " + Math.round.bmi +" ,so your are underweight."
    } else if (bmi === 18.5 || 24.9) {
        return "Your BMI is " + Math.round.bmi +" ,so you have a normal weight."
    } else if (bmi > 24.9) {
        return "Your BMI is " + Math.round.bmi +" ,so your are overweight."
    }
}

bmiCalculator(65,1.8);