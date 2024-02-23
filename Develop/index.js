// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter project title',
    },
    {
        type: 'input',
        name: 'description',
        message: "Enter project description",
    },
    {
        type: 'list',
        name: 'license',
        message: "Select your license:",
        choices: ["Apache", "GNU", "MIT"],
    },
    {
        type: 'input',
        name: 'Github',
        message: "What is your Github username",
    },
    {
        type: 'input',
        name: 'GithubUrl',
        message: "What is your Github URL",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email address",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const readmeContent = generateMarkdown(fileName, data);

    fs.writeFile('README.md', readmeContent, (err) =>
    err ? console.log(err) : console.log("Success"))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions);
    writeToFile;
}

// Function call to initialize app
init();
