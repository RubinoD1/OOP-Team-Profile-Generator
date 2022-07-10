/*
Employee is the parent class Properties:

    name
    id
    email
    getName()
    getId()
    getEmail()
    getRole() // Returns 'Employee'
*/

function Employee(name) {
    this.name = name;
};

module.exports = Employee;