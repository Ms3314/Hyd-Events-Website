// need to make a middleware that checks if the user exists and also exists and verifies the password of this thing 
import bcrypt from "bcryptjs"
import { FindUser } from "../models/adminModel.js";
import jwt from "jsonwebtoken"
// just checking like the user exists and the password 

export async function CheckEmailPass(req , res , next) {
    const { email  ,password} = req.body ;
    const user = await FindUser(email) ; 
    if(user) {
        bcrypt.compare(password , user.password , function(err, ans) {
            console.log(ans , "this is the response")
            if (ans === true) {
                next() 
            }
            else {
                res.status(500).json({
                    err , 
                    status : "error" , 
                    message : "Credentials error"
                })
            }
        });
    }
    else {
        res.status(500).json({
            status : "error" , 
            message : "Credentials error"
        })
    }
}

export async function CheckTokenExist(req , res , next ) {
    // what this function expects is just your token 
    const {token} = req.body ;
        // console.log(decoded.user) // bar
        try {    
                jwt.verify(token, process.env.SECRET_KEY , async function(err, decoded) {
                    const user = await FindUser(decoded.email) ;
                    if(user) {
                        req.userid = user.id ; 
                        next()  
                    }else {
                        res.status(500).json({
                            status : "error" ,
                            message : "Invalid credentials here" ,
                            err ,
                        })
                    }     
            })
        } catch (error) {
            res.status(500).json({
                status : "error" ,
                message : "Something went wrong due to not able to verify you" ,
                error ,
            })
        }
      ;
}