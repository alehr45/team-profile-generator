const Engineer = require("../lib/Engineer");

test("Can set a name for new engineer", () => {
    const name = "Alex";
    const newEngineer = new Engineer(name);
    expect(newEngineer.name).toBe(name);
  });
  
  test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const newEngineer = new Engineer("Alex", 1, "test@test.com", "GitHub");
    expect(newEngineer.getRole()).toBe(testValue);
  });
  

  test("Can get GitHub username with getGithub()", () => {
    const testValue = "GitHubUser";
    const newEngineer = new Engineer("Alex", 1, "test@test.com", testValue);
    expect(newEngineer.getGithub()).toBe(testValue);
  });

  test("Can get id with getId()", () => {
    const testValue = 50;
    const newEngineer = new Engineer("Alex", testValue);
    expect(newEngineer.getId()).toBe(testValue);
  });