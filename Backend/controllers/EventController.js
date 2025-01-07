import { AddEvent } from "../models/adminModel.js";

export const EventController = {
    EventAddAdmin :  (req, res) => {
        console.log("We have reached here")
        const  {title , description , event_date , price , registration_link , event_image } = req.body ;
        // the event adding ka part 
        const organisation = req.userid ;
        AddEvent(title , description , event_date , price , registration_link , organisation , event_image ).then((data)=>{
            console.log("we came to the then block")
            res.status(200).json({
                status : "success" ,
                message : "the even has been added " ,
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

