// Generics allow us to write functions with any data types

// Example:
// Goal: Create a function which takes any type and retuens the same type
function genericFunction<T>(arg: T): T {
  return arg;
}

const someStringValue = genericFunction<string>("Hello World!");
const someNumberValue = genericFunction<number>(25);

interface genericInterface<T> {
  value: T;
  getValue: () => T;
}
const genericString: genericInterface<string> = {
  value: "Hello world",
  getValue() {
    return this.value;
  },
};

// Working with an async function, which returns a promise
async function someFunc(): Promise<string> {
  return "Hello world";
}

// createArray<string>(3, "hello"); //['hello', 'hello', 'hello']
// createArray<number>(4, 100); // [100, 100, 100, 100]

// function generateStringArray(length: number, value: string): string[] {
//   let result: string[] = [];
//   result = Array(length).fill(value);
// }
