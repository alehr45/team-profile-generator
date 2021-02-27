const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");


let completedTeam = [];

function teamName() {
  inquirer
    .prompt([
      {
        message:
          "Welcome to the Team Roster Creator 1.0. Please type in your teams name",
        name: "teamName",
      },
    ])
    .then(function (data) {
      const teamName = data.teamName;
      completedTeam.push(teamName);
      addManager();
    });
}

function addManager() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the team manager's name?",
        name: "teamManager",
        validate: function (answer) {
          if (answer.length < 1) {
            return console.log("A valid name is required.");
          }
          return true;
        },
      },
      {
        type: "input",
        message: "What is the managers employee ID?",
        name: "id",
        validate: function (answer) {
          if (answer.length < 1) {
            return console.log("A valid ID input is required.");
          }
          return true;
        },
      },
      {
        type: "input",
        message: "What is the manager's email address?",
        name: "email",
        validate: function (answer) {
          if (answer.length < 1) {
            return console.log("A valid email address is required.");
          }
          return true;
        },
      },
      {
        type: "number",
        message: "Whats the manager's office number?",
        name: "officeNumber",
      },
    ])
    .then(function (data) {
      const name = data.teamManager;
      const id = data.id;
      const email = data.email;
      const officeNumber = data.officeNumber;
      const teamMember = new Manager(name, id, email, officeNumber);
      completedTeam.push(teamMember);
      addTeamMembers();
    });
}

function addEngineer() {
  inquirer
    .prompt([
      {
        message: "What is the engineer's name?",
        name: "name",
        validate: function (answer) {
          if (answer.length < 1) {
            return console.log("A valid name is required.");
          }
          return true;
        },
      },
      {
        message: "What is the engineer's email address?",
        name: "email",
        validate: function (answer) {
          if (answer.length < 1) {
            return console.log("A valid email address is required.");
          }
          return true;
        },
      },
      {
        message: "What is the engineer's Github profile?",
        name: "github",
        validate: function (answer) {
          if (answer.length < 1) {
            return console.log("A valid Github is required.");
          }
          return true;
        },
      },
    ])

    .then(function (data) {
      const name = data.name;
      const id = completedTeam.length + 1;
      const email = data.email;
      const github = data.github;
      const teamMember = new Engineer(name, id, email, github);
      completedTeam.push(teamMember);
      addTeamMembers();
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        message: "What is the intern's name?",
        name: "name",
        validate: function (answer) {
          if (answer.length < 1) {
            return console.log("A valid name is required.");
          }
          return true;
        },
      },
      {
        message: "What is the intern's email address?",
        name: "email",
        validate: function (answer) {
          if (answer.length < 1) {
            return console.log("A valid email is required.");
          }
          return true;
        },
      },
      {
        message: "What is the intern's school?",
        name: "school",
        validate: function (answer) {
          if (answer.length < 1) {
            return console.log("A valid school is required.");
          }
          return true;
        },
      },
    ])

    .then(function (data) {
      const name = data.name;
      const id = completedTeam.length + 1;
      const email = data.email;
      const school = data.school;
      const teamMember = new Intern(name, id, email, school);
      completedTeam.push(teamMember);
      addTeamMembers();
    });
}

function addTeamMembers() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like to add any more team members?",
        choices: [
          "Yes, I would like to add an engineer",
          "Yes, I would like to add an intern",
          "No, my team is complete",
        ],
        name: "addTeamData",
      },
    ])
    .then(function (data) {
      switch (data.addTeamData) {
        case "Yes, I would like to add an engineer":
          addEngineer();
          break;
        case "Yes, I would like to add an intern":
          addIntern();
          break;

        case "No, my team is complete":
          createRosterHTML();
          break;
      }
    });
}

function createRosterHTML() {
console.log("You have successfully created your new team roster. Congrats!");
const htmlArray = []
const roster1 = `
  <!DOCTYPE html>
  <html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>${completedTeam[0]}</title>
<link rel="stylesheet" href="style.css">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">${completedTeam[0]}</h1>
    
  </div>
</div>

`
htmlArray.push(roster1);

for (let i = 1; i < completedTeam.length; i++) {
  let card = `
  <main role="main">
  <div class="container-fluid">
      <div class="card-columns mx-auto">
          <div class="card text-center">
                    <div class="card-body">
                      <h5 class="card-title">${completedTeam[i].getName()}</h5>
                      <p class="card-text role">${completedTeam[i].getRole()}.</p>
                      <p class="card-text"><small class="text-muted">Employee ID: ${completedTeam[i].getId()}</small></p>
                      <p class="card-text"><small class="text-muted">Email: ${completedTeam[i].getEmail()}</small></p>
                      <p class="card-text"><small class="text-muted">Office Number: ${completedTeam[i].officeNumber}</small></p>
                    
                    </div>
                </div>
                  
              </div>

        </div>
</main>
`
htmlArray.push(card)};

fs.writeFile(`./finishedHTML/ ${completedTeam[0]}.html`, htmlArray.join(""), function (err) {
        
})
};


// makeRoster();

teamName();
