export function sayHello(name: string): void {
  console.log(`Hello there,${name}`);
}

export let person = "susan";

export type Student = {
  name: string;
  age: number;
};

const newStudent: Student = {
  name: "Peter",
  age: 24,
};

export default newStudent;
