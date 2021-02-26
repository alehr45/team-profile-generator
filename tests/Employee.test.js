const Employee = require("../lib/Employee");

test("Can set a name for new employee", () => {
  const name = "Alex";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});
