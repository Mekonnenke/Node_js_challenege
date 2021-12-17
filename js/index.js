//Dependence and variables
const inquirer  = require('inquirer');
const fs =require ('fs');
const scripts = require('scripts');

const generateMarkdown = require('./scripts/generateMarkdown')

const questions = [{

       type: 'input',
       name:'Title',
       message: 'What is the title of this develop page?'
    },
    {
        type: 'input',
        name:'Description',
        message: 'What is the the purpose of this developing page?'

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

]

