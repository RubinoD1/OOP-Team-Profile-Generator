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

Employee.prototype.getName = function() {
    return this.name; 
};

Employee.prototype.getId = function() {
    return this.id;
};

Employee.prototype.getEmail = function() {
    return this.email;
};

Employee.prototype.getRole = function() {
    return this.role;
};



module.exports = Employee;