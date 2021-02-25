const Engineer = require("../lib/Engineer");

test("Can set  a name for new engineer", () => {
    const name = "Alice";
    const e = new Engineer(name);
    expect(e.name).toBe(name);
  });
  