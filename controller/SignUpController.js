const connect=require("../models/db.js");
class SignUpController{
    register(data,callBack){
        console.log(data);

            let query="Insert into register set ?";
            connect.query(query,data.item,(err, result) => {
                callBack(err, result)
            });
        
    }
    getData(callBack){
        let query="Select * from register";
        connect.query(query,(err,result)=>{
            callBack(err,result)
        });
    }
    deleteData(id,callBack){
        console.log(id);
        let query="delete from register where ?";
        
        connect.query(query,id,(err,result)=>{
            callBack(err,result);
        })
    }
    updateData(id,data,callBack){
        console.log(id,data);
        let query="update register set isVerified ="+data.isVerified+" where id="+id.id;
        connect.query(query,(err,result)=>{
            callBack(err,result);
        })
    }
}

module.exports =() =>{
    return new SignUpController();
}
