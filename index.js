// Declaring the dependencies and variables
const fs = require("fs");
const inquirer = require("inquirer");
const generateReadme = require("./js/generateMarkdown")

//Prompt the user questions to populate the README.md
    const promptUser = () => {

    return inquirer.prompt([
        {
        
            type: "input",
            name: "name",
            message: "What is the project title? (requireed)",
           
        },
        {
            type: "input",
            name: "description",
            message: "Write a brief description of your project: "
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation process if any: ",
        },
      
        {
            type: 'input',
            name:'Table of Contents',
            message: 'Table of Contents'
    
        },
        {
            type: 'input',
            name:'Usage',
            message: 'How do you install this project?'
    
        },
        {
            type: 'input',
            name:'How people can contribute on this page?',
            message: 'Contributing'
    
        },
        {
            type: 'input',
            name:'What licence is being used?',
            message: 'Licence',
            Choices: [
                "Apache",
                "MIT",
                "Mozilla",
            ] 
    
        },
        {
            type: 'input',
            name:'What command are needed to test this app?',
            message: 'Tests'
    
        },
        {
            type: "input",
            name: "questions",
            message: "What do I do if I have an issue? "
        },
        { 
            type: 'input',
            name:'What is your github name? ',
            message: 'User name'
    
        },
        {
            type: 'input',
            name:'What is your email address? ',
            message: 'Email'
    
        }
    ])
    .then(projectData => {
       readmeData.projects.push(projectData);
        if (projectData.confirmAddProject) {
          return promptProject(readmeData);
        } else {
          return readmeData;
        }
      });
}
    
promptUser()
.then(promptProject)
.then(readmeData => {
  
  
  fs.writeFile('./README.md', pageREADME, err => {
    if (err) throw new Error(err);

    console.log('Page created! Check out index.html in this directory to see it!');
  });
});



