// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
inquirer.prompt([
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
        type: 'input',
        name: 'test',
        message: "How do you test this app?",
    },
    {
        type: 'input',
        name: 'file',
        message: "What is the file name for your entry point?",
    },
    {
        type: 'list',
        name: 'license',
        message: "Select your license:",
        choices: ["Apache", "GPL", "MIT"],
    },
    {
        type: 'input',
        name: 'github',
        message: "What is your Github username",
    },
    {
        type: 'input',
        name: 'githubUrl',
        message: "What is your Github URL",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email address",
    },
]).then((data) => {
    const readmeContent = generateMarkdown(data);

    fs.writeFile('README.md', readmeContent, (err) =>
    err ? console.log(err) : console.log("Success"))
});

