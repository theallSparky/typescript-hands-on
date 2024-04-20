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
