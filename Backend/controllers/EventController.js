import { AddEvent } from "../models/adminModel.js";


export const EventController = {
    EventAddAdmin : async (req, res) => {
        const  {title , description , event_date , price , registration_link , event_image } = req.body ;
        // the event adding ka part 
        const organisation = req.userid ; 
        AddEvent(title , description , event_date , price , registration_link , organisation , event_image ).then((data)=>{
            res.status(200).json({
                status : "success" ,
                message : "the even has been added " ,
                data : "data"
            })
        }).catch((error)=>{
            res.status(500).json({
                status : "error" ,
                message : "Error adding the events" ,
                error
            })
        })
    
    }
}


export async function  EventAddAdmin(req, res) {
    const  {title , description , event_date , price , registration_link , event_image } = req.body ;
    // the event adding ka part 
    const organisation = req.userid ;
    AddEvent(title , description , event_date , price , registration_link , organisation , event_image ).then((data)=>{
        res.status(200).json({
            status : "success" ,
            message : "the even has been added " ,
            data : "data"
        })
    }).catch((error)=>{
        res.status(500).json({
            status : "error" ,
            message : "Error adding the events" ,
            error
        })
    })

}
