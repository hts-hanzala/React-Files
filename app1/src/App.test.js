import App, { sum, getUser } from "./App";

test("24 sum 32 is equal to 56", () => {
  expect(sum(24, 32)).toBe(56);
});

test("User Function returns the correct user", () => {
  const expectedUser = {
    id: 1,
    Name: "Tom",
    Department: "Tester",
  };
  const actualUser = getUser();
  expect(actualUser).toEqual(expectedUser);
});

test("User returns a defined value", () => {
  const actualUser = getUser();
  expect(actualUser).toBeDefined();
});

test("User returns a truthy user object", () => {
  const actualUser = getUser()
  expect(actualUser).toBeTruthy()
});
