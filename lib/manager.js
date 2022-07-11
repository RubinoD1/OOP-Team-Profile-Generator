const Employee = require('./Employee');

// extends the employee construct by adding office # and replaces the employee role value with Manager
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email); 
        
        this.officeNumber = officeNumber; 
    }

    getRole () {
        return "Manager";
    }
}


module.exports = Manager; 