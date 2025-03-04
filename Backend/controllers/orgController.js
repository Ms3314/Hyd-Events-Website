import {  FindUserById, UpdateUserById } from "../models/adminModel.js";

export const orgController = {
    OrgDetail : async (req , res) => {
        try {
            const userid = req.userid;
                const userOrg = await FindUserById(userid)
                if(userOrg) {
                    res.status(200).json({
                        status: "success",
                        message: "This is yours organization",
                        org : userOrg 
                    });
                }
        } catch (error) {
            res.status(500).json({
                status: "error",
                message: "Error Getting my Account",
                error: error.message  // Return readable error
            });
        }
    },
    ChangeOrgDetail : async (req, res) => {
        try {
            const userid = req.userid;
            const { 
            name,
            college,
            email,
            about,
            orgBanner,
            orgPic 
            } = req.body;
            // console.log(req.body , "Why am i not able to see it even thoough i sen it ")
            // console.log(orgPic , orgBanner , "the updated images")
            const userOrg = await UpdateUserById( userid, name,
            college,
            email,
            about,
            orgBanner,
            orgPic
            )
            // console.log(userOrg , "The response")
            if(userOrg) {
                res.status(200).json({
                    status: "success",
                    message: "This is yours updated organization",
                    org : userOrg 
                });
            }
        } catch (error) {
            res.status(500).json({
                status: "error",
                message: "Error dealing with the organization",
                error: error.message  // Return readable error
            });
        }
    }
        
        
        
}
    
