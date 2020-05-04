const router=require("express").Router();
class SignUp{
    constructor(SignUpController){
        this.controller=SignUpController
        this.init();
    }

    init(){
        router.post("/",(req,res)=>{
            this.controller.register(
                req.body,
                (err, result) => {
                    if (err) console.log(err)
                    else res.send(result)
                }
            )
                
        });
        router.get("/",(req,res)=>{
            this.controller.getData(
                
                (err, result) => {
                    if (err) console.log(err)
                    else res.send(result)
                }
            )
        });
        router.post("/login",(req,res)=>{
            console.log("qw"+req.body);
            this.controller.getUData(
                
                req.body,
                (err, result) => {
                    if (err) console.log(err)
                    else{ 
                      
                        res.send(result)}
                }
            )
        });
        router.delete("/:id",(req,res)=>{
            //console.log("ef",req);
            this.controller.deleteData(
                req.params,
                (err,result)=>{
                    if (err) console.log(err);
                    else    res.send(result)
                }
            )
        });
        router.put("/:id",(req,res)=>{
            this.controller.updateData(
                req.params,req.body,
                (err,result)=>{
                    if (err) console.log(err);
                    else    res.send(result)
                }               
            )
        })


    }
    getRouter(){
        return router;
    }
}

module.exports=controller =>{
    return new SignUp(controller);
};