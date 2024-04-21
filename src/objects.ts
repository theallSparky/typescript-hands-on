/* 
Below is the object car which has an interface nearly identical 
in syntax structure as the object value assignment syntax 
*/

let car: { brand: string; year: number } = { brand: "toyota", year: 2002 };
car.brand = "Mitsubishi"; // Reassigns cars brand, which conforms with the interface, no error raised

/* car.color = "Blue";
This would throw an error since line 1 did not declare color as a property in the interface
 */

let car1: { make: string; model: string; year: number } = {
  make: "Hyundai",
  model: "Azera",
  year: 2016,
};
let car2: { make: string; model: string; year: number } = {
  make: "Dodge",
  model: "Ram",
  year: 2008,
};

let book: { title: string; cost: number } = { title: "book", cost: 20 };
let pen: { title: string; cost: number } = { title: "pen", cost: 5 };
let backpack: { title: string; cost: number } = {
  title: "backpack",
  cost: 49.99,
};
let notebook: { title: string } = { title: "notebook" };

let schoolItems1: { title: string; cost: number }[] = [
  book,
  pen,
  backpack,
  // notebook, <-- Notebook would cause an error here since the notebook object does not have a price in its interface
];

let schoolItems2: { title: string; cost?: number }[] = [
  // cost?:number makes cost optional
  book,
  pen,
  backpack,
  notebook,
];

let schoolItems3: { readonly title: string; cost?: number }[] = [
  //This one is set to read only
  // cost?:number makes cost optional
  book,
  pen,
  backpack,
  notebook,
];
//schoolItems3[0].title  "something cool" <-- Would not work because schoolItems3 is set to readonly
