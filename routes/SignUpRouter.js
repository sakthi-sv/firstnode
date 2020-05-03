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
    }
    getRouter(){
        return router;
    }
}

module.exports=controller =>{
    return new SignUp(controller);
};