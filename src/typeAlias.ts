// A type alias is kinda like a copy of another type annotation's shape to be used for other vars

type User = { id: number; name: string; isActive: boolean };
// It is conventional to capitilize types

const abel: User = {
  id: 1,
  name: "abel",
  isActive: true,
};

const nico: User = {
  id: 2,
  name: "nico",
  isActive: false,
};

function createUser(user: User) {
  console.log(
    `Hello there, ${user.name.charAt(0)}` +
      `${user.name.slice(1).toLowerCase()}`
  );
  return user;
}

//Another example of type aliasing using a union operator
type stringOrNumber = string | number;
let value: stringOrNumber;
value = "hey ho hi hum";
value = 5;

// An example using light mode and dark mode
type Theme = "light" | "dark";
let theme: Theme;
theme = "dark";
theme = "light";

function setTheme(t: Theme) {
  theme = t;
}

setTheme("light");
setTheme("dark");
