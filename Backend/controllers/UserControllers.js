import { AllEvents, FindAllEventOfOrganization, FindOrganizationDetailsById } from "../models/commonModel"

export const UserController = {
    DisplayAllEvents : async (req , res) =>{
        try {
            const data = await AllEvents();
            res.status(200).json({
                status : "Success" ,
                payload : data , 
            })
        } catch (error) {
            res.status(500).json({
                status : "Error" ,
                message : error.message
            })
        }
    } ,
    DisplayEventByOrg : async (req , res) => {
        const {organization} = req.body
        try {
            const data = await FindAllEventOfOrganization(organization);
            res.status(200).json({
                status : "Success" ,
                payload : data , 
            })
        } catch (error) {
            res.status(500).json({
                status : "Error" ,
                message : error.message
            })
        }
    } ,
    DisplayOrganizationDetail :async (req , res) => {
        const {organization} = req.body 
        try {
            const data = await FindOrganizationDetailsById(organization);
            res.status(200).json({
                status : "Success" ,
                payload : data , 
            })
        } catch (error) {
            res.status(500).json({
                status : "Error" ,
                message : error.message
            })
        }
    } ,
}