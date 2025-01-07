// need to make a middleware that checks if the user exists and also exists and verifies the password of this thing 
import bcrypt from "bcryptjs"
import { FindUser } from "../models/adminModel.js";
import jwt from "jsonwebtoken"
// just checking like the user exists and the password 

export async function CheckEmailPass(req , res , next) {
    const { email  ,password} = req.body ;
    const user = await FindUser(email) ; 
    if(user) {
        console.log(user)
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
    console.log("Are you  working")
    const {token} = req.body ;
    console.log(token)
    const SECRET_KEY = "hesham1234"
        // console.log(decoded.user) // bar
        try {    
            console.log("Are you  working 2...")
            console.log("Are you  working 2..." , SECRET_KEY )
                jwt.verify(token, SECRET_KEY , async function(err, decoded) {
                    console.log("Are you  working 3...")
                    console.log(err , "error is any")
                    console.log(decoded , "this is the decoded data of the token")
                    const user = await FindUser(decoded.email) ;
                    console.log(user)
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