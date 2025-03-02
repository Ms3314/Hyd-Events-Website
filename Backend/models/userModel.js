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

export async function GiveOrgWithEvents(orgid) {
    try {
        console.log(orgid , "did we reach over here")
        const orgs = await prisma.organization.findUnique({
            where : {
                id : Number(orgid)
            },
            include : {
                events : true 
            }
        })
        return orgs ;
    } catch (error) {
        throw new Error(error.message || "Something went wrong while getting orgs and events")
    }
}

export async function GiveAllOrgs () {
    try {
        const orgs = await prisma.organization.findMany() ;
        return orgs ;
    } catch (error) {
        throw new Error(error.message || "Something went wrong while trying to get the Organizations")
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