const Employee = require("./Employee");

// extends the employee construct by adding GitHub info and replaces the employee role value with engineer
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);

        this.github = github; 
    };

    getGithub () {
        return this.github;
    };

    getRole () {
        return "Engineer";
    };
};


module.exports = Engineer; 