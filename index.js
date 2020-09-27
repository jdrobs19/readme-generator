const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
        {
            type: 'input',
            name: 'title',
            message: "What is the title of your project? (required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter prject title.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project.'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use your project?'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Detail any contribution guidelines.'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Desciption on how to test your application.'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Select applicable license.',
            choices: ['Apache', 'BSD', 'GPL', 'LGPL', 'MIT', 'Mozilla', 'Eclipse']
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter a link to your GitHub profile.'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter a contact email address.'
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Instructions to reach you with additional questions.'
        }
    ];

// function to write README file
function writeToFile(fileName, data) {
    const pageData = generateMarkdown(data);
    fs.writeFile('./README.md', pageData, err => {
        if (err) throw new Error(err);
        console.log("README created");
    })
}

// function to initialize program
function init() {   
 inquirer.prompt(questions)
 .then(answers =>{
    //  console.log(answers);
    //  console.log(answers.title);
writeToFile('README.me', answers);
 })
};



// function call to initialize program
init();