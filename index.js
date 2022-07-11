const inquirer = require('inquirer');
const fs = require('fs'); 
//HTML template
//const creeateHTML = require('./src/HTML-template.html');

//Employee js files 
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 
const Manager = require('./lib/Manager');

//employee array- inquirer data will be pushed to this. 
const employeeArray = [];

//The first employee to be added is the manager. Info is collected for this employee first. 
const createManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter manager's name",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                  } else { 
                    console.log('A name must be entered for a manager');
                    return false;
                  }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter manager's id",
            validate: nameInput => {
                //cheecks for a number 
                if (isNaN(nameInput)) {
                    console.log('A id number must be entered');
                    return false;
                  } else { 
                    return true;
                  }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter manager's email address",
            validate: email => {
                //email valid format check
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                
                if (valid) {
                    return true;
                  } else { 
                    console.log('A email address must be entered');
                    return false;
                  }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter manager's office number",
            validate: nameInput => {
                //cheecks for a number 
                if (isNaN(nameInput)) {
                    console.log('A office number must be entered');
                    return false;
                  } else { 
                    return true;
                  }
            } 
        }
    ])
}

createManager();
