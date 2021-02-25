const Manager = require("../lib/Manager");

test("Can set  a name for new manager", () => {
    const name = "Alice";
    const e = new Manager(name);
    expect(e.name).toBe(name);
  });
  