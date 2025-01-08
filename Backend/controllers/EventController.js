import { AddEvent, DeleteEvent, EditEvent } from "../models/adminModel.js";
import { FindAllEventOfOrganization } from "../models/commonModel.js";

export const EventController = {
    EventAddAdmin :  (req, res) => {
        const  {title , description , eventDate , price , registrationLink , eventImage , formLink} = req.body ;
        // the event adding ka part 
        const organisation = req.userid ;
        console.log("orgnisation of the token" , req.userid)
        AddEvent(title , description , eventDate , price , registrationLink , organisation , eventImage , formLink ).then((data)=>{
            res.status(200).json({
                status : "success" ,
                message : "the event has been added " ,
                payload : data  ,
            })
        }).catch((error)=>{
            // console.log(error , "the error is coming over here")
            res.status(500).json({
                status : "error" ,
                message : "Error adding the events" ,
                error : error.message , 
            })
        })
    
    } ,
    DeleteOneEvent : async (req , res) => {
        const { eventid} = req.body ;
        const organization = req.userid
        try {
            await DeleteEvent(organization , eventid)
            res.status(200).json({
                status : "Success" ,
                message : "The following event was deleted"
            })
        } catch (error) {
            res.status(500).json({
                status : "Failed" ,
                message : "An error have occured while trying to delete an event"
            })
        }
    }, 
    DisplayEvents : async (req ,res) => {
        const organization = req.userid 
        try {
            const data = await FindAllEventOfOrganization(organization)
            res.status(200).json({
                status : "Success",
                payload : data 
            })
        } catch (error) {
            res.status(500).json({
                status : "Failure" ,
                message : error.message
            })
        }
    },
    EditOneEvent : async (req , res) => {
        const {eventid , ...updates} = req.body ;
        try {
            const update = await EditEvent(eventid , updates) ;
            res.status(200).json({
                status :"Success" ,
                payload : update ,
                message : " Event has been updated successfully" ,
            })
        } catch (error) {
            res.status(500).json({
                status : "Error" ,
                message : error.message ,
            })
        }
    }
}

