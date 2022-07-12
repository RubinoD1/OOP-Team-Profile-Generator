const inquirer = require('inquirer');
const fs = require('fs'); 
//HTML template
const createHTML = require('./src/HTML-template.js');

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
    .then(managerData => {
        const  { name, id, email, officeNumber } = managerData; 
        const manager = new Manager (name, id, email, officeNumber);

        employeeArray.push(manager); 
    });
};

//creates employee after manager has been added. 
const createEmployee = () => {
   
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Select the role of the employee",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "Enter emplyee's name",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                  } else { 
                    console.log('A name must be entered for the employee');
                    return false;
                  }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter employee's id",
            validate: nameInput => {
                //cheecks for a number 
                if (isNaN(nameInput)) {
                    console.log('A employee id number must be entered');
                    return false;
                  } else { 
                    return true;
                  }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter employee's email address",
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
        //checks for intern role and if match asks question
        {
            type: 'input',
            name: 'school',
            message: "Enter Intern's school",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("A school must be enetered")
                }
            }
        },
        //checks for engineer role and if match asks question
        {
            type: 'input',
            name: 'github',
            message: "Enter engineer's GitHub username",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("A GitHub username must be entered")
                }
            }
        },
        //asks if user wants to add another employee
        {
            type: 'confirm',
            name: 'confirmCreate',
            message: 'Add another employeee?',
            default: false
        }
    ])
    .then(employeeData => {
        let { name, id, email, role, github, school, confirmCreate } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        employeeArray.push(employee); 

        if (confirmCreate) {
            return createEmployee(employeeArray); 
        } else {
            return employeeArray;
        }
    })
};


//function to write HTML file
function writeToFile(data) {
    fs.writeFile("./dist/index.html", data, err => {
       //if there is an error
       if (err) throw err;
       //else success message
       console.log('HTML created! Check out the index.html file in the dist folder!');
    });
};

createManager()
  .then(createEmployee)
  .then(employeeArray => {
    return createHTML(employeeArray);
  })
  .then(pageHTML => {
    return writeToFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });





