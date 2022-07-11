const inquirer = require('inquirer');
const fs = require('fs'); 
//HTML template
const creeateHTML = require('./src/HTML-template.html');

//Employee js files 
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 
const Manager = require('./lib/Manager');

//employee array- inquirer data will be pushed to this. 
const employeeArray = [];

//The first employee to be added is the manager. Info is collected for this employee first. 
const createManager = () => {
    
}