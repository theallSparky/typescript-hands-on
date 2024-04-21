let unknownValue: unknown;

unknownValue = "hello world";
unknownValue = [1, 2, 3];
unknownValue = 35.6564;
// All above was allowed

// unknownValue.toFixed(30) <-- Would not be allowed due to type being declared as unknown

function runSomeCode() {
  const random = Math.random();
  if (random < 0.5) {
    throw new Error("There was an oopsie...");
  } else {
    throw "some error";
  }
}

try {
  runSomeCode();
} catch (error) {
  if (error instanceof Error) {
    console.log(error); // Knows there is a message property due to instanceof
  } else {
    console.log(error);
  }
}
