// A variable with type never cannot have a value asigned to it

let noValue: never; //Allowed
// let noValue = 0 <-- not allowed

// May encounter a type never in the wild if using 'too many' conditionals

type theTheme = "light" | "dark";

function checkTheme(theme: theTheme): void {
  if (theme === "light") {
    console.log("light theme");
    return;
  }
  if (theme === "dark") {
    console.log("dark theme");
    return;
  }
  theme; // Here, after all 2 possible values were exhausted, theme is type 'never' since no other possible values exist for theTheme
}

enum Color {
  Red,
  Blue,
}

function getColorName(color: Color) {
  switch (color) {
    case Color.Red:
      return "Red";
    case Color.Blue:
      return "Blue";
    default:
      // at build time
      throw new Error(
        `Select a BETTER color! Unexpected value received: ${color}`
      );
  }
}

console.log(getColorName(Color.Red));
console.log(getColorName(Color.Blue));
