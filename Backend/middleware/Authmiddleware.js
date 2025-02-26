// need to make a middleware that checks if the user exists and also exists and verifies the password of this thing 
import bcrypt from "bcryptjs"
import { FindUser } from "../models/adminModel.js";
import jwt from 'jsonwebtoken';

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
        const authHeader = req.headers.authorization;
        let token = null ;
        if (authHeader && authHeader.startsWith("Bearer ")) {
            token = authHeader.split(" ")[1];
        } 
        if (!token) {
            res.status(401).json({
                status : "error" ,
                message : "the token does not exist"
            })
        }
        // console.log("this is the token" , token)
        jwt.verify(token, process.env.SECRET_KEY , async function(err, decoded) {
            // console.log(decoded.user) // bar
            try {
                const user = await FindUser(decoded.email) ;
                if(user) {
                    req.userid = user.id ; 
                    next();
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
