import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
 

export async function GiveAllEvents() {
    try {
        const events = await prisma.event.findMany() ;
        return events ;
    } catch (error) {
        throw new Error(error.message || "Something went wrong while trying to get the events")
    }
}


export async function GiveOneEvents(eventid) {
    try {
        const events = await prisma.event.findUnique({
            where : {
                id : Number(eventid)
            },
            include : {
                organisation : {
                    select : {
                        id : true ,
                        name : true ,
                    }
                }
            }
        }) ;
        return events ;
    } catch (error) {
        throw new Error(error.message || "Something went wrong while trying to get the events")
    }
}