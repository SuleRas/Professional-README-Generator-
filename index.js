// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [];


// TODO: Create a function to write README file
// TODO: Create a function to initialize app

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'Title',
        message: 'Please enter your project Title:',
      },
      {
        type: 'input',
        name: 'Description',
        message: 'Please enter your project description:',
      },
      {
        type: 'input',
        name: 'Installation',
        message: 'Please enter your installation requirements',
      },
      {
        type: 'input',
        name: 'Usage',
        message: 'Please enter your usage:',
      },
      {
        type: 'input',
        name: 'License',
        message: 'Please select a license from the option below:',
        choices: ['Apache-2.0','Mit',]
      },
      {
        type: 'input',
        name: 'Contributiing',
        message: 'Please enter your project contribution guidelines:',
      },
      {
        type: 'input',
        name: 'Tests',
        message: 'Please follow the instruction below:',
      },
      {
        type: 'input',
        name: 'Questions',
        message: 'Please enter your email',
      },
      {
        type: 'input',
        name: 'Questions',
        message: 'Please enter your Github profile',
      },
    ])
    .then((answers) => {
        var readmePageContent = generateMarkdown(answers)
  
        fs.writeFile("README.md", readmePageContent,(err) =>
          err ? console.log(err) : console.log("Successfully generated ReadMe")
        )
      });
    }

      const init = () => {
        promptUser();
      };
      
// Function call to initialize app
init();
