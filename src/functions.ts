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

function addThree(number: number) {
  let anotherNumber: number = 3;
  return number + anotherNumber;
}
const result: number = addThree(3);
const someValue = result;
