import { GiveAllEvents, GiveOneEvents } from "../models/userModel.js";

// Controller function to get all events
export const UserController  = {
    AllEvents : async (req , res) => {
    try {
        // Fetch all events from the database using Prisma
        const events = await GiveAllEvents()
        // Return success response with events data
        res.status(200).json({
        success: true,
        message: "Events retrieved successfully",
        events,
        });
    } catch (error) {
        res.status(500).json({
        success: false,
        message: "Failed to retrieve events",
        error: error.message,
        });
    }   
    },
    AnEvent : async (req ,res) => {
        try {
            const eventid = req.params.eventid
            const events = await GiveOneEvents(eventid)
            res.status(200).json({
                success: true,
                message: "Events retrieved successfully",
                events,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Failed to retrieve events",
                error: error.message,
                });  
        }
    }
}


