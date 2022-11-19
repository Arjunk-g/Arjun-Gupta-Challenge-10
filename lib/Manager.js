const employee = require('./Employee')

class ManagerClass extends employee {
    constructor (Name,Id,Email,managingId){
        super(Name,Id,Email)
        this.managingId = managingId;
    }
    getmanagingID(){
        return this.managingId
    }
    getrole(){
        return "Manager"
    }
}