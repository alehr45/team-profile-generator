const Intern = require("../lib/Intern");

test("Can set a name for new intern", () => {
    const name = "Alex";
    const e = new Intern(name);
    expect(e.name).toBe(name);
  });
  