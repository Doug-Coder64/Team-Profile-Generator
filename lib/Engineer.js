const employee = require('../lib/Employee.js');

class Engineer extends employee {
    constructor(name, id, email, githubUser){
        super(name, id, email);
        this.githubUser = githubUser;
    }

    getGithub(){
        return this.githubUser;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;