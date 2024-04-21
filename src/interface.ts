interface ABook {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  // method
  printAuthor(): void;
  printTitle(message: string): string;
}

const deepWork: ABook & { price: number } = {
  isbn: 123456,
  title: "Deep Work",
  author: "Cal Newport",
  genre: "self-help",
  price: 50,
  printAuthor() {
    console.log(this.author); // This refers to the object deepWork, .author acceses the property
  },
  printTitle(message) {
    return `${this.title} ${message}`;
  },
};

// Praciticed interafces in interface.ts
deepWork.printAuthor();
const bookTitle = deepWork.printTitle("is an awesome book, yo!");
console.log(bookTitle);
