import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//Preview Events 
export async function AllEvents() {
    try {
        const res = await prisma.event.findMany()
        return res
    } catch (error) {
        throw new Error(error.message || "An error occured while finding the events ")      
    }
}

//Preview events of an Org 
export async function FindAllEventOfOrganization (organization) {
    try {
        const res = await prisma.event.findMany({
            where : {
                organizationId : organization  
            }
        })
        return res
    } catch (error) {
        throw new Error(error.message || "An error occured while finding the events of the organisation")      
    }
}
// Propper Description of the event and we will have latest events conducted by the org
export async function FindOrganizationDetailsById (organisation) {
    try {
        const res = await prisma.organization.findUnique({
            where : {
                id : organisation
            }
        })
        return res
    } catch (error) {
        throw new Error(error.message || "Could not find the error")
    }
}

