const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
import { AddUser, FindUser } from '../models/adminModel';

// {
//     status : "success" , 
//     token : "djkdfjkdfjksf" , 
// }

export async function LoginAdmin(req , res) {
    const {email } = req.body ;
    const data = FindUser(email) 
    // this is were I find some data of the user 
    if(data) {
        var token = jwt.sign({ user: email }, process.env.SECRET_KEY);
        // the password checking should be done by a iddleware
        
        // token key is generated if the user exist
        
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
}

export async function RegisterUser (req , res) {
    // registering this user here 
    const {name , email , college ,password} = req.body ;
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, function(err , hash) {
            // Store hash in your password DB.
            const userData = AddUser(name , email , college , password = hash )
            // logging the user that will be created 
            if(userData) {
                res.status(200).json({
                    status : "success" ,
                    message : "User has been authenticated" ,
                    token 
                })
            }
            console.log(userData) ; 
        });
    });


}

module.export = {LoginAdmin , RegisterUser}