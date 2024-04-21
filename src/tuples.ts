let aPerson: [string, number] = ["john", 25]; // Here aPerson has a fixed length and a fixed order of types

let date: [number, number, number] = [4, 21, 24];
date.push(25); // May only push if data type matches
date.push(25);
date.push(25);
date.push(25); // Date has now been modified (could've avoided with readonly)
console.log(date);

function getPerson(): [string, number] {
  return ["john", 25];
}

let randomPerson = getPerson();
console.log(randomPerson[0]);
console.log(randomPerson[1]);

// Optional parameter

let suzieQ: [string, number?] = ["susan"]; // Doesn't complain despite no number present
