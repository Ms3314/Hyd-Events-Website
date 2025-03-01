import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
import { FindUser } from '../models/adminModel.js';
import { AddUser } from '../models/adminModel.js';
// {
//     status : "success" , 
//     token : "djkdfjkdfjksf" , 
// }
export const AuthController = {
    LoginAdmin : async (req , res) =>  {
        const {email } = req.body ;
        const data = await FindUser(email) 
        // this is were I find some data of the user 
        if(data) {
            var token = jwt.sign({email : email }, process.env.SECRET_KEY);
            // the password checking should be done by a iddleware
            

            res.status(200).json({
                status : "success" , 
                message : "you have succesfully logged in" ,
                token  ,
            })
        } 
        else {
            res.status(404).json({
                status : "user does not exist" , 
                code : A21 ,
                message : "the user already exists"
            })
        }
    },
    RegisterUser : async (req , res) => {
        // registering this user here 
        const {name , email , college ,password} = req.body ;
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(password, salt, function(err , hash) {
                // Store hash in your password DB.
                const userAdded = AddUser(name , email , college , hash )
                // logging the user that will be created 
                if(userAdded) {
                    res.status(200).json({
                        status : "success" ,
                        message : "The Account has been created succssfully" , 
                    })
                }
                console.log(userAdded) ; 

            });
        });
    
    
    }

}


