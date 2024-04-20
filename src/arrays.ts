let prices: number[] = [100, 75, 60, 50, 42]; // prices is an array which may hold only numbers
prices.push(25); // successfully pushes 25 into the array since it conforms to the data type constraint
// prices.push('strawberry fields') <-- This wouldn't be added since it's a string
console.log(prices);

let fruits: string[] = ["apple", "orange", "banana"];
fruits.push("strawberry");

let newArray: (string | boolean)[] = ["apple", true, "grapes", false];

let tempuratures: number[] = [45, 50, 30, 76, 48];
let tempuratureAverage: number =
  (tempuratures[0] +
    tempuratures[1] +
    tempuratures[2] +
    tempuratures[3] +
    tempuratures[4]) /
  tempuratures.length;
console.log(`Temp avg. = ${tempuratureAverage}`);
