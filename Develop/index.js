const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// questions for user to answer, questions with validate are required!
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: titleInput => {
                if(titleInput) {
                    return true;
                } else {
                    console.log('Please enter the project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of the project',
            validate: descriptionInput => {
                if(descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description for the project!');
                    return false;
                }
            }
        },
        {
           type: 'input',
           name: 'installation',
           message: 'Enter the installation instructions' 
        },
        {
           type: 'input',
           name: 'usage',
           message: 'Enter the instruction for use'
        },
        {
            type: 'list',
            name: 'license',
            message: "Please select a licenses",
            choices: ['GPLv3', 'MPL_2.0', 'Apache_2.0', 'MIT', 'Boost_1.0', 'None']
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'Enter contibutors for this project'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What testing has been done for your project?'
        },
        {
            type: 'input',
            name: 'githubUser',
            message: 'Enter your GitHub username:',
            validate: githubUserInput => {
                if(githubUserInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address:',
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        }
    ]);
};

// Write file
questions().then((answers) => {
    fs.writeFile("NEWREADME.md", generateMarkdown(answers), (err) => {
      if (err) throw err;
    });
  });
