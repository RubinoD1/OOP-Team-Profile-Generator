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

function Employee(name = '', email = '') {
    this.name = name;

    this.id = 1;
    this.email = email;
    this.role = 'Employee';
}





module.exports = Employee;