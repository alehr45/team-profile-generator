const Manager = require("../lib/Manager");

test("Can set  a name for new manager", () => {
    const name = "Alex";
    const newManager = new Manager(name);
    expect(newManager.name).toBe(String);
  });
  
