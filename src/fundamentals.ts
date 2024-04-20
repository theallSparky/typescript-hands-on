console.log("Typescript fundamentals tutorial!");

// Creates the interface as the blueprint for the object to use
interface someValue {
  name: string;
  id: number;
}

// Initialization of object called 'someObj' using interface (blueprint) of 'someValue'
let someObj: someValue = {
  name: "random",
  id: 123,
};

console.log(someObj);

// Let's create a simple string in TS. Then perform string methods on the string.
let simpleString: string = `Ant Man 2 was aight at best. I didn't watch number 3 at all, yo.`;
let simpleStringUpper: string = simpleString.toUpperCase();
let simpleStringLower: string = simpleString.toLowerCase();

console.log(simpleString, simpleStringLower, simpleStringUpper);

// Declare a number
let numberOfFeetInAMile: number = 5280;
let numberOfYardsInAMile: number = 1760;
let yearOfAmericanIndependence: number = 1776;

// Declare a boolean
let amIAMale: boolean = true;
let isStarWarsAwesome: boolean = true;
let isGeorgeInMenInBlack: boolean = true;
let isAwesome: boolean = false;
isAwesome = true;

// Data type errors in TypeScript will not crash the app during development, rather it will throw errors, however, during build, it will crash.
