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
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }
};

//Name
Employee.prototype.getName = function() {
    return this.name; 
};

//Id
Employee.prototype.getId = function() {
    return this.id;
};

//Email
Employee.prototype.getEmail = function() {
    return this.email;
};

//Role
Employee.prototype.getRole = function() {
    return 'Employee';
};



module.exports = Employee;