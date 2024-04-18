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
