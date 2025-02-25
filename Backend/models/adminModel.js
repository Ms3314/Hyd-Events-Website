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
        const res = await prisma.organization.findUnique({
            where : {
                email
            }
        })  
        console.log(res , "this is the user with the unique email")
        return res ; 
}
// the organisation will be an array over here 
//.... this is like a little messed up like anyone can come up and add for another person like we need to add like main hi maire event ke naam se dal sakta 
export async function AddEvent (title , description , event_date , price , registration_link , organisation , event_image ) {
    try {
        const res = await prisma.event.create({
            data : {
                title ,
                description ,
                event_date , 
                price ,
                registration_link ,
                // so like we are connecting the event with an organisation
                organisation : {
                    connect : [
                        {id : organisation}
                    ]    
                },
                event_image , 
            }
        })
        return res 
    } catch (error) {
        return new Error(error)
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
export async function EditEvent (  eventid , title , description , event_date , price , registration_link , organisation , event_image ) {
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

