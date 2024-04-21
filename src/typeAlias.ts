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
