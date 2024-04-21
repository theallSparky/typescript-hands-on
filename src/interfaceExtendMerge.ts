// Merging interfaces
interface Person {
  name: string;
  getDetails(): string;
}

interface DogOwner {
  dogName: string;
  getDogDetails(): string;
}

interface Person {
  age: number;
}

// Basically just creates 2 interfaces of the same name?

const person: Person = {
  name: "John",
  age: 30,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
};

interface Employee extends Person {
  employeeId: number;
}

const employee: Employee = {
  name: "jane",
  age: 28,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Employee Id: ${this.employeeId}`;
  },
  employeeId: 1,
};

console.log(employee.getDetails());

interface Manager extends Person, DogOwner {
  managePeople(): void;
}

const manager: Manager = {
  name: "bob",
  age: 25,
  dogName: "rex",
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
  getDogDetails() {
    return `Name: ${this.dogName}, Age: ${this.age}`;
  },
  managePeople() {
    console.log("Managing people.");
  },
};
manager.managePeople();
