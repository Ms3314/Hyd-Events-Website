import { AddEvent, DeleteEvent, FindAllEvent } from "../models/adminModel.js";

export const EventController = {
    EventAddAdmin :  (req, res) => {
        const  {title , description , eventDate , price , registrationLink , eventImage} = req.body ;
        // the event adding ka part 
        const organisation = req.userid ;
        AddEvent(title , description , eventDate , price , registrationLink , organisation , eventImage ).then((data)=>{
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
        const {organisation , eventid} = req.body ;
        try {
            const data = await DeleteEvent(organisation , eventid)
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
        const {organisation} = req.body ;
        try {
            const data = await FindAllEvent(organisation)
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
    }       
}

