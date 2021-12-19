// Declaring the dependencies and variables
const fs = require("fs");
const inquirer = require("inquirer");
const generatorMarkdown  = require("./js/generateMarkdown")


//Prompt the user questions to populate the README.md
const questions = [{
        
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
            name:'What command are needed to test this app?',
            message: 'Tests'
    
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
    
        },
    
    
    
    ]

function writeToFile(fileName, answers)
{
    fs.writeFile(fileName, answers, function(err){
       console.log(fileName);
       console.log(answers);
       if (err)
       {
           return log.error(err);
       }
       else
       {
         console.log("The README has been generated");
       }
    });
}


//function to initial data
function init()
{
    inquirer
            .prompt(questions)
            .then(function(answers){
                writeToFile('README.md', generatorMarkdown(answers));
                console.log(answers);
            })

}
init();
 
