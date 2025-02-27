import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function AddUser(name , email , college ,password ) {

    try {
        const res = await prisma.organization.create({
            data : {
                name ,
                email ,
                password ,
                college ,
            }
        })
        console.log(res , "the data we send");
        return res ;  
    } catch (error) {
        return error;
    }
    
}

export async function FindUser (email) {
    try {
        const res = await prisma.organization.findUnique({
            where : {
                email
            }
        })  
        // console.log(res , "this is the user with the unique email")
        return res ; 
    } catch (error) {
        throw new Error(error.message || "An error occured While finding the user")
    }
        
}

export async function DoesUserWithIdExist(orgid) {
    console.log("the id for the org is" , orgid)
    try {
        const res = await prisma.organization.findUnique({
            where : {
                id : Number(orgid)
            }
        })  
        // console.log(res , "this is the user with the unique email")
        return res ; 
    } catch (error) {
        throw new Error(error.message || "An error occured While finding the user")

    }
}
// the organisation will be an array over here 
//.... this is like a little messed up like anyone can come up and add for another person like we need to add like main hi maire event ke naam se dal sakta 

export async function AddEvent(
    title, description, event_date, price, registration_link, 
    organisation, event_image, time, venue
) {
    console.log("The event adding function is working");
    console.log( event_date , "time"  )
    try {
        const res = await prisma.event.create({
            data: {
                title,
                Description: description,  // Fix field name (Prisma is case-sensitive!)
                event_date: new Date(event_date), // Ensure correct date format
                price : Number(price),
                registration_link,
                event_image,
                time: time,  // Ensure it's a DateTime format
                venue,
                organisation: {
                    connect: [{ id: organisation }]  // ✅ Correct Many-to-Many syntax
                }
            }
        });

        console.log("Event added successfully:", res);
        return res;
    } catch (error) {
        console.error("Error adding event:", error);  // Log the actual error
        throw new Error("Failed to add event");  // ✅ Throw an error instead of returning one
    }
}




export async function CheckEventExist (eventid) {
    try {
        const data = await prisma.event.findUnique({
            where : {
                id : eventid ,
            }
        })
        if (!data) {
            throw new Error("couldnt find the event with this id");
        }
    } catch (error) {
        throw new Error(error.message || "An error occured while ediitng this event")
    }    
    

}

// NOTE THAT THE DATA WHEN SEND SHOULDNT BE SEND INDUVIDUALY ... LIKE ALLOF THEM MUSTT BE SEND HERE 
// edding feature 
// basically ak se main pura kar de sakne isme i dont have to everything 
export async function EditEvent (  eventid , title , description , event_date , price , registration_link , organisation , event_image , time , venue  ) {
    // need to check if an existing event like this exist or not right 
        try {
            await CheckEventExist(eventid)
            await prisma.event.update({
                where : {
                    id : eventid,
                    organisation : {
                        some : {id : organisation}
                    }
                } , 
                data : {
                    title ,
                    description ,
                    event_date , 
                    price ,
                    registration_link ,
                    organisation ,
                    event_image 
                }
            
        }) 
        } catch (error) {
            throw new Error(error.message || "An error occured while editing the event")
        }
            
       
}


export async function FindEventsOfAdmin(org) {
    try {
        const ressponseOrg = (await prisma.event.findMany({
            where : {
                organisation : {
                    some : { id : Number(org)}
                }
            }
        }   
    ))  
        return ressponseOrg ;
    } catch (error) {
        throw new Error(error.message || "An error occured while editing the event")
    }
    
}


export async function FindAndDeleteEventsOfAdmin(orgid, eventid) {
    try {
        const foundEvent = await prisma.event.findFirst({
            where: {
                id: Number(eventid),
                organisation: {
                    some: { id: Number(orgid) }
                }
            }
        });

        if (!foundEvent) return false; // Event does not belong to the org

        await prisma.event.delete({
            where: { id: Number(eventid) }
        });

        return true;
    } catch (error) {
        throw new Error(error.message || "An error occurred while deleting the event");
    }
}


// few things we have to do 
  
// - Create user route
    
//     POST api/v1/admin/signup
    
// - sign in user route
    
//     POST api/v1/admin/signin
    
// - Add events
    
//     POST api/v1/admin/event
    
// - my added events
    
//     GET api/v1/admin/event


// delete from the db 

