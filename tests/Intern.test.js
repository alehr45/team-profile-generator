const Intern = require("../lib/Intern");

test("Can set  a name for new intern", () => {
    const name = "Alice";
    const e = new Intern(name);
    expect(e.name).toBe(name);
  });
  