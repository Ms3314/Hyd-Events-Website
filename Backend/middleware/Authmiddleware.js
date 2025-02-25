// need to make a middleware that checks if the user exists and also exists and verifies the password of this thing 
import bcrypt from "bcryptjs"
import { FindUser } from "../models/adminModel.js";
// just checking like the user exists and the password 

export async function CheckEmailPass(req , res , next) {
    const { email  , password} = req.body ;
    console.log(email , password)
    const user = await FindUser(email) ; 
    if(user) {
        console.log("the user is found")
        console.log(user.password , "from the user")
        console.log(password)
        bcrypt.compare(password , user.password, function(err, output) {
            console.log(output , "the ourput")
            if (output === true) {
                console.log("password is matching")
                next() 
            }
            else {
                res.status(500).json({
                    status : "error" , 
                    message : "Credentials error"
                })
            }
        });
    }
    else {
        console.log("Cannot find your data try creating a new account")
        res.status(500).json({
            status : "error" , 
            message : "Credentials error"
        })
    }
}

export function CheckTokenExist(req , res , next ) {
    // what this function expects is just your token 
    const {token} = req.body ;
    jwt.verify(token, process.env.SECRET_KEY , function(err, decoded) {
        // console.log(decoded.user) // bar
        try {
            const user = FindUser(decoded.email) ;
            if(user) {
                res.userid = user.id ; 
                next()  
            }else {
                res.status(500).json({
                    status : "error" ,
                    message : "Invalid credentials here" ,
                    err ,
                })
            }
        } catch (error) {
            res.status(500).json({
                status : "error" ,
                message : "Something went wrong " ,
                error 
            })
        }
      });
}