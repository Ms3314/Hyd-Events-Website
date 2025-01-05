// need to make a middleware that checks if the user exists and also exists and verifies the password of this thing 

import { FindUser } from "../models/adminModel";

// just checking like the user exists and the password 

export async function CheckEmailPass(req , res , next) {
    const { email  ,password} = req.body ;
    const user = FindUser(email) ; 
    if(user) {
        bcrypt.compare(user.password , password, function(err, res) {
            if (res === true) {
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
            const data = FindUser(decoded.user) ;
            if(data) {
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