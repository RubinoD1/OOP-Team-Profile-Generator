const Employee = require('./Employee');

// extends the employee construct by adding school info and replaces the employee role value with Intern
class Intern extends Employee  {
    constructor (name, id, email, school) {
        super (name, id, email); 

        this.school = school; 
    };

    getSchool () {
        return this.school;
    };

    getRole () {
        return "Intern";
    };
};


module.exports = Intern; 