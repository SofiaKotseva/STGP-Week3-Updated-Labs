let age = 42
if (age <= 17) {
    console.log("Underage");
} else if (age <=65) {
    console.log("Insurable");
} else {
    console.log("out of range");
}

let age1 = 55
age1 <= 17 ? console.log ("Underage") : age1 <= 65 ? console.log ("Insurable") 
: console.log ("Out of range")