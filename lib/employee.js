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

//create employee object with four properties: name, id, email, and role. 
function Employee(name = '', email = '') {
    this.name = name;

    this.id = 1;
    this.email = email;
    this.role = 'Employee';
};


Employee.prototype.getId = function() {
    
    return `${this.name}'s id is ${this.id}`;
};



module.exports = Employee;