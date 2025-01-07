import { AddEvent } from "../models/adminModel.js";

export const EventController = {
    EventAddAdmin :  (req, res) => {
        const  {title , description , eventDate , price , registrationLink , eventImage} = req.body ;
        // the event adding ka part 
        const organisation = req.userid ;
        AddEvent(title , description , eventDate , price , registrationLink , organisation , eventImage ).then((data)=>{
            res.status(200).json({
                status : "success" ,
                message : "the event has been added " ,
                data ,
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
    DisplayEvent : async (req , res) => {
        
    }   
}

