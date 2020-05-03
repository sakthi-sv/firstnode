const connect=require("../models/db.js");
class SignUpController{
    register(data,callBack){
        
            let query="Insert into register set ?";
            connect.query(query,data,(err, result) => {
                callBack(err, result)
            });
        
    }
}

module.exports =() =>{
    return new SignUpController();
}
