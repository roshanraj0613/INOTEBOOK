var jwt = require("jsonwebtoken");
const jwt_sec =  "pankajisagood$boy";

const fetchuser = (req,res,next)=>{
   // get the user from jwt token and id to req object;
    const token = req.header("auth-token");
    if(!token){
        res.status(401).send({error:"please authenticate using valid token"});
    }

    try{
        const data = jwt.verify(token, jwt_sec);
        req.user = data.User;
        next();

    }catch{
        res.status(401).send({error:"please authenticate using valid token"});
    }
      
}


module.exports = fetchuser;