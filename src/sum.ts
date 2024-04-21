function sum(message: string, ...numbers: number[]): string {
  const doubled = numbers.map((num) => num * 2);
  console.log(doubled);

  let total = numbers.reduce((prev, current) => {
    return prev + current;
  }, 0);
  return `${message} ${total}`;
}

let result = sum("The total is: ", 1, 2, 3, 4, 5);
console.log(result);

function logMessage(message: string) {
  console.log(message);
}
logMessage("Hello Typescript!"); // This type is void because there is no return, an absence of a value.

function logMessageVoid(message: string): void {
  console.log(message); // Once void has been set as type, adding a return means a data type is being returned, so they're incompatible.
}

// Using objects as parameters in functions
function createEmployee({ id }: { id: number }): {
  id: number;
  isActive: boolean;
} {
  return { id, isActive: id % 2 === 0 };
}
const first = createEmployee({ id: 1 });
const second = createEmployee({ id: 2 });
console.log(first, second);

function createStudent(student: { id: number; name: string }): void {
  console.log(
    `Welcome to the course ${student.name.charAt(0).toUpperCase()}` +
      `${student.name.slice(1).toLowerCase()}!!`
  );
}
const newStudent = {
  id: 3,
  name: "Timtim-timmehhhhh", // Obligatory South Park reference
};
console.log(createStudent(newStudent));
createStudent({ id: 6, name: "Billy Bob" });
createStudent({ id: 7, name: "Billy Bob Joe" });
createStudent({ id: 8, name: "Billy Bob Thornton" });
createStudent({ id: 9, name: "Tommy Lee Jones" });
