const fs = require("fs");
const inquirer = require("inquirer");
const Prompt = require("inquirer/lib/prompts/base");
const util = require("util");
const writeFile = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      message: "Whats the team managers name?",
      name: "teammanager",
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("A valid name is required.");
        }
        return true;
      },
    },
    {
      type: "input",
      message: "Whats their employee ID?",
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
      message: "Whats the employee's email address?",
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
      message: "Whats the employee's office number?",
      name: "officenumber",
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("A valid office number is required.");
        }
        return true;
      },
    },
  ]);
}

function createRosterHTML(response) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Custom Roster</title>
    </head>
    <body>
        <h1 class="manager">Team Manager: ${response.teammanager}</h1>
        <h1 class="id">Employee ID: ${response.id}</h1>
        <a class="email" href="mailto:${response.email}">Email: ${response.email}</a>
        <h1 class= "number">Office Number: ${response.officenumber}</h1>
       
        
    </body>
    </html>
    `;
}

async function makeRoster() {
  try {
    const response = await promptUser();
    const roster = createRosterHTML(response);
    await writeFile("Roster.html", roster);
    console.log("Your Roster has been generated! Congratulations!");
  } catch (err) {
    console.log("Something went wrong!");
  }
}

makeRoster();
