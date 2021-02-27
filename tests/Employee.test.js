const Employee = require("../lib/Employee");

test("Can set a name for new employee", () => {
  const name = "Alex";
  const newEmployee = new Employee(name);
  expect(newEmployee.name).toBe(name);
});

test("Can get email with getEmail()", () => {
  const testValue = "test@test.com";
  const newEmployee = new Employee("Alex", 1, testValue);
  expect(newEmployee.getEmail()).toBe(testValue);
});

test("Can get id with getId()", () => {
  const testValue = 50;
  const newEmployee = new Employee("Alex", testValue);
  expect(newEmployee.getId()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const newEmployee = new Employee("Alex", 1, "test@test.com", "MIT");
  expect(newEmployee.getRole()).toBe(testValue);
});