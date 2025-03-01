import { AddEvent, DoesUserWithIdExist, FindAndDeleteEventsOfAdmin, FindEventsOfAdmin } from "../models/adminModel.js";

export const EventController = {
    EventAddAdmin : async (req, res) => {
        const { title, description, event_date, price, registration_link, event_image, time, venue } = req.body;
    
        const organisation = req.userid;  // Assuming `req.userid` is an org ID
    
        // console.log("This is the organization ID:", organisation);
        // console.log("The received event data:", req.body);
    
        try {
            const eventData = await AddEvent(title, description, event_date, price, registration_link, organisation, event_image, time, venue);
            
            res.status(200).json({
                status: "success",
                message: "The event has been added successfully",
                data: eventData
            });
    
        } catch (error) {
            console.error("Error in EventAddAdmin:", error);
    
            res.status(500).json({
                status: "error",
                message: "Error adding the event",
                error: error.message  // Return readable error
            });
        }
},
    EventsOfAdmin : async (req ,res) => {
        // console.log(req.params , "these are the params" , req.url , "this is the url")
        const org = req.userid
        try {
            if(!DoesUserWithIdExist(org)) {
                res.status(404).json({
                    status: "error",
                    message: "Error while searching for the events",
                    error: error.message  // Return readable error
                });
            } 
            const response = await FindEventsOfAdmin(org)
            res.status(200).json({
                status : "Success" ,
                message :  "Events of the admin are the following" ,
                events : response  ,
            })
        } catch (error) {
            console.error("Error in EventsOfAdmin:", error);
            
            res.status(500).json({
                status: "error",
                message: "Error adding the event",
                error: error.message  // Return readable error
            });
        }
    } ,
    EventDeleteByAdminOnly : async (req , res) => {
        console.log("we reached to delete part")
        const org = req.userid ;
        const eventid = req.query.eventid ;
        console.log(org , eventid , "this is the event id and the org id")
        try {
            const responseForDelete = await FindAndDeleteEventsOfAdmin(org ,eventid )
            if (responseForDelete) {
                res.status(200).json({
                    status : true ,
                    message :  "Events of the admin are the following" ,
                }) 
            }else {
                res.status(404).json({
                    status: false,
                    message: "You are not authorized to delete this event",
                });
            }
        } catch (error) {
            res.status(500).json({
                status: "error",
                message: "Error while deleting the event",
                error: error.message  // Return readable error
            });
        }
    }
}