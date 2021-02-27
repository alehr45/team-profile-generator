const Intern = require("../lib/Intern");

test("Can set a name for new intern", () => {
    const name = "Alex";
    const newIntern = new Intern(name);
    expect(newIntern.name).toBe(name);
  });
  
  test("Can get school with getSchool()", () => {
    const testValue = "MIT";
    const newIntern = new Intern("Alex", 1, "test@test.com", testValue);
    expect(newIntern.getSchool()).toBe(testValue);
  });

  test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const newIntern = new Intern("Alex", 1, "test@test.com", "MIT");
    expect(newIntern.getRole()).toBe(testValue);
  });