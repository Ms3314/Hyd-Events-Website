import { GiveAllEvents, GiveAllOrgs, GiveOneEvents, GiveOrgWithEvents } from "../models/userModel.js";

// Controller function to get all events
export const UserController  = {
    FindOrgWithEvents : async (req ,res) => {
        try {
            const {orgid} = req.params;
            // console.log("did we get the orgid" , orgid)
            const orgsWithEvents = await GiveOrgWithEvents(orgid);
            if (orgsWithEvents) {
                return res.status(200).json({
                    success: true,
                    message: "Orgs and Events retrieved successfully",
                    orgdata: orgsWithEvents,
                })
            } else {
                return res.status(404).json({
                    success : false ,
                    message : "Couldnt find the organization"
                })
            }
        } catch (error) {
            return res.status(500).json({
                    success: false,
                    message: "Failed to retrieve Orgs and Events",
                    error: error.message,
            })
        }
    },
    AllOrgs : async (req , res) => {
        try {
            // Fetch all events from the database using Prisma
            const Allorgs = await GiveAllOrgs()
            // Return success response with events data
            return res.status(200).json({
            success: true,
            message: "Organizationd retrieved successfully",
            Allorgs,
            });
        } catch (error) {
            return res.status(500).json({
            success: false,
            message: "Failed to retrieve Organizations",
            error: error.message,
            });
        }   
    },
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
    FindEvent : async (req ,res) => {
        try {
            const eventid = req.params.eventid
            // console.log("params : " , eventid )
            const events = await GiveOneEvents(eventid)
            // console.log("this is the details of the specific event" , events)
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


