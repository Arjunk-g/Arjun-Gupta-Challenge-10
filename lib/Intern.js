const employee = require('./Employee')

class internClass extends employee {
    constructor (Name,Id,Email,school){
        super(Name,Id,Email)
        this.school = school;
    }
    getSchool(){
        return this.school
    }
    getrole(){
        return "Intern"
    }
}

module.exports = internClass;