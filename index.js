//require statements for necessary application components
const inquirer = require("inquirer");
const generateMarkdown = require("./source/generateMarkdown.js");
const writeToFile = require("./create/createPage.js");

// array for user questions 
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the project title?",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log("Please enter a project title!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a project description: ",
        validate: descInput => {
            if (descInput) {
                return true;
            } else {
                console.log("Please enter a project description!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter the application installation instructions: ",
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log("Please enter the installation instructions!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter the application usage instructions: ",
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log("Please enter usage instructions.");
                return false;
            }
        }
    },
    {
        type: "list",
        name: "license",
        message: "Please select a license for your project.",
        choices: ["MIT", "GNU GPLv3", "Mozilla 2.0", "Apache 2.0", "Unlicensed"]
    },
    {
        type: "input",
        name: "contribute",
        message: "Please enter the contribution instructions: ",
        default: "Contributor Covenant",
        validate: contribInput => {
            if (contribInput) {
                return true;
            } else {
                console.log("Please enter the project contribution instructions!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "tests",
        message: "Please enter your test instructions: ",
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log("Please enter your test instructions!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username: ",
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log("Please enter your GitHub username!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address: ",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter your email adderss!");
                return false;
            }
        }
    }
];