//Logical operators
//And && for boolians when every element is true
//Or || for boolians when at least 1 is true

let ageLessTwenty = false;
let student = true;
let freeTiket = ageLessTwenty && student;
console.log("Free tiket is available: "+freeTiket);
let discontIsAvailable = ageLessTwenty || student;
console.log("Discont is available: "+discontIsAvailable)
