import newStudent, { sayHello, person, Student } from "./modules.ts";
// import { someValue } from "./example.js";

sayHello("TypeScript test 434");
console.log(newStudent);
console.log(person);

const anotherStudent: Student = {
  name: "bob",
  age: 24,
};
console.log(anotherStudent);
