function sayHi(name: string) {
  console.log(
    `hello and welcome, ${
      name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    }`
  );
}

sayHi("hArRy");

function calculateDiscount(price: number): number {
  return price * 0.9;
}
const finalPrice: number = calculateDiscount(200);

// Create a function which adds 3 to whatever number is given as input
function addThree(number: number) {
  let anotherNumber: number = 3;
  return number + anotherNumber;
}
const result: number = addThree(3);
const someValue = result;

const names: string[] = ["john", "jacob", "jingleheimer", "schmidt"];

// Creates a function which checks if a name is in the list
function isNameInList(name: string): boolean {
  return names.includes(name.toLowerCase());
}
let nameToCheck: string = "jOHN";
if (isNameInList(nameToCheck)) {
  console.log(
    `${
      nameToCheck.charAt(0).toUpperCase() + nameToCheck.slice(1).toLowerCase()
    } is in the list!`
  );
} else {
  console.log(`${nameToCheck.toLowerCase()} is NOT in the list!`);
}

function calculatePrice(price: number, discount?: number): number {
  return price - (discount || 0); // When working wih optional parameters in a TS function, set the part of function with var to (var || 0)
}
let priceAfterDiscount: number = calculatePrice(100, 20);
console.log(priceAfterDiscount);

function calculateScore(
  initialScore: number,
  penaltyPoints: number = 0 // We add a defualt value of 0 so line 54 may run without error
): number {
  return initialScore - penaltyPoints;
}
let scoreAfterPenalty = calculateScore(85, 5);
let scoreWithoutPenalty = calculateScore(250);
console.log(scoreAfterPenalty);
