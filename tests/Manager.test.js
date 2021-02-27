const Manager = require("../lib/Manager");

test("Can set a name for new Manager", () => {
  const name = "Alex";
  const newManager = new Manager(name);
  expect(newManager.name).toBe(name);
});
  
test("Can get email with getEmail()", () => {
  const testValue = "test@test.com";
  const newManager = new Manager("Alex", 1, testValue);
  expect(newManager.getEmail()).toBe(testValue);
});