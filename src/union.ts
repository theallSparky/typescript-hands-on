// Intro to the union type

let tax: number | string = 10;
// In this example, the variable of tax may be assigned the data type of either number or string
tax = 100;
tax = "100"; // Both reassigments work here

// In the below example, variableName: 'possibleEndValue1' | 'possibleEndValue2' |'possibleEndValue3' = "defaultValue"
let requestStatus: "pending" | "success" | "error" = "pending";
console.log(requestStatus); // Console logs 'pending' as it is the default value
requestStatus = "error"; // This works because 'error' is a possible value
//requestStatus = "random"; <-- 'random' was never decalred as a possible end value, so TS would throw a tantrum
requestStatus = "success"; //Also works, unsurprisingly

// Type 'any' opts out of the Type checking
let notSure: any = 4;
notSure = true;
notSure = { lame: "yes", superLame: true };
notSure = "yayayoyo";

//Arrays
let listOfBooks = ["1984", "Ishmael", "12 Rules For Life"];

let foundBook: string | undefined; // If successful, string, but if an error in retreiving book, undefined is an optional data type, stopping runtime error from triggering

for (let book of listOfBooks) {
  if (book === "Ishmael") {
    foundBook = book;
    break;
  }
}
console.log(foundBook?.toUpperCase()); // we add the '?' after the variable name when using methods since undefined is a possible type
console.log(foundBook?.length);
