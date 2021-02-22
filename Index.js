const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const writeFile = util.promisify(fs.writeFile);

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
let completedTeam = [];

function addManager() {
  inquirer.prompt([
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
      type: "input",
      message: "Whats the manager's office number?",
      name: "officeNumber",
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("A valid office number is required.");
        }
        return true;
      },
    },
 ])     
  .then(function (data) {
    const name = data.teamManager
    const id = 1
    const email = data.email
    const officeNumber = data.officeNumber
    const teamMember = new Manager(name, id, email, officeNumber)
    completedTeam.push(teamMember)
    
});

function createRosterHTML(response) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <link rel="stylesheet" href="style.css">
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Custom Roster</title>
    </head>
    <header>
    <h1 class="myteam">My Team
    </header>
    <body>
    <div>
        <div class="container">
            <p class="manager">Team Manager: ${response.teammanager}</p>
            <p class="id">Employee ID: ${response.id}</p>
            <p class="officenumber">Office #: ${response.officenumber}</p>  <br>
            <a class="email" href="mailto:${response.email}">Email: ${response.email}</a>
        </div>
    </div>
    </body>
    </html>
    
    `;
}

async function makeRoster() {
  try {
    const response = await addManager();
    const roster = createRosterHTML(response);
    await writeFile("teamroster.html", roster);
    console.log("Your team roster has been generated! Congratulations!");
  } catch (err) {
    console.log("Something went wrong!");
  }
}

makeRoster();
