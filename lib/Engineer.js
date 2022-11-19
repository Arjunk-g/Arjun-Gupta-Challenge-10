const employee = require('./Employee')

class engineerClass extends employee {
    constructor (Name,Id,Email,github){
        super(Name,Id,Email)
        this.github = github;
    }
    getGithub(){
        return this.github
    }
    getrole(){
        return "Engineer"
    }
}