const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const writeFile = util.promisify(fs.writeFile);

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
let completedTeam = [];

function teamName() {
  inquirer
    .prompt([
      {
        message: "Welcome to the Team Roster Creator 1.0. Please type in your teams name",
        name: "teamName",
      },
    ])
    .then(function (data) {
      const teamName = data.teamName;
      completedTeam.push(teamName)
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
  inquirer.prompt([
    {
      message: "What is this engineer's name?",
      name: "name",
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("A valid name is required.");
        }
        return true;
      },
    },
    {
      message: "What is this engineer's email address?",
      name: "email",
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("A valid email address is required.");
        }
        return true;
      },
    },
    {
      message: "What is this engineer's Github profile?",
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
  };

function addIntern() {
  inquirer
    .prompt([
      {
        message: "What is this intern's name?",
        name: "name",
        validate: function (answer) {
          if (answer.length < 1) {
            return console.log("A valid name is required.");
          }
          return true;
        },
      },
      {
        message: "What is this intern's email address?",
        name: "email",
        validate: function (answer) {
          if (answer.length < 1) {
            return console.log("A valid email is required.");
          }
          return true;
        },
      },
      {
        message: "What is this intern's school?",
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
        message: "Would you like to add more team members?",
        choices: [
          "Yes, add an engineer",
          "Yes, add an intern",
          "No, my team is complete",
        ],
      name: "addTeamData",
      },
    ])
    .then(function (data) {
      switch (data.addTeamData) {
        case "Yes, add an engineer":
          addEngineer();
          break;
       case "Yes, add an intern":
          addIntern();
          break;
        
      
      }
      console.log(completedTeam)
    })
};

// function createRosterHTML(response) {
//   return `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//     <link rel="stylesheet" href="style.css">
//         <meta charset="UTF-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>My Custom Roster</title>
//     </head>
//     <header>
//     <h1 class="myteam">My Team
//     </header>
//     <body>
//     <div>
//         <div class="container">
//             <p class="manager">Team Manager: ${response.teammanager}</p>
//             <p class="id">Employee ID: ${response.id}</p>
//             <p class="officenumber">Office #: ${response.officenumber}</p>  <br>
//             <a class="email" href="mailto:${response.email}">Email: ${response.email}</a>
//         </div>
//     </div>
//     </body>
//     </html>

//     `;
// }

// async function makeRoster() {
//   try {
//     const response = await addManager();
//     const roster = createRosterHTML(response);
//     await writeFile("teamroster.html", roster);
//     console.log("Your team roster has been generated! Congratulations!");
//   } catch (err) {
//     console.log("Something went wrong!");
//   }
// }


// makeRoster();

teamName();
