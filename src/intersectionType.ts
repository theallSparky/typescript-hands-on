// A way to combine multiple types into one
type Book = { id: number; name: string; price: number };

const book1: Book = {
  id: 1,
  name: "12 rules for something important",
  price: 25,
};
const book2: Book = {
  id: 1,
  name: "the secret wife of walter smithy", // kinda wanted to say 'the secret wife of walter shitty', idk made me chuckle
  price: 25,
};

const discountedBook: Book & { discount: number } = {
  // now discountedBook uses all of type Book + new one too
  id: 3,
  name: "lord of the fries",
  price: 25,
  discount: 0.15,
};
