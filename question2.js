// Take a variable with a numeric grade and output the corresponding letter grade

let grade = 75;

let letterGrade = ""; 

if (grade >= 90) {
    letterGrade = "A";
} else if (grade >= 80) {
    letterGrade = "B";
} else if (grade >= 70) {
    letterGrade = "C";
} else if (grade >= 60) {
    letterGrade = "D";
} else {
    letterGrade = "F";
}

console.log("Your letter grade is: " + letterGrade);
