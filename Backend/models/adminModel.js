import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function AddUser(name , email , college ,password ) {
    const res = await prisma.organization.create({
        data : {
            name ,
            email ,
            password ,
            college ,
        }
    })
    return res ; 
}

export async function FindUser (email) {
    const res = await prisma.organization.findUnique({
        where : {
            email
        }
    })
    return res ;
}
// the organisation will be an array over here 
//.... this is like a little messed up like anyone can come up and add for another person like we need to add like main hi maire event ke naam se dal sakta 
export async function AddEvent (title , description , eventDate , price , registrationLink , organisation , eventImage ) {
        await prisma.event.create({
            data : {
                title ,
                description ,
                eventDate , 
                price ,
                registrationLink ,
                // so like we are connecting the event with an organisation
                organization : {
                    connect :  {id : organisation} // connect to the organisation using ID 
                },
                eventImage , 
            }
        }).then((data)=> {
            return data ; 
        }
        ).catch((err)=>{
            throw new Error("An Error have been occured when adding data", err)
        })
}

// this function check if the event exist when given the event id 

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
        throw new Error(error.message || "Does this event Exist ?? ")
    }    
    

}

// findiing all 
export async function FindAllEvent (organisation) {
    try {
        const res = await prisma.event.findMany({
            where : {
                organisation 
            }
        })
        return res
    } catch (error) {
        throw new Error(error.message || "An error occured while finding the events of the organisation")      
    }
}


export async function DeleteEvent (organisation , eventid) {
    await CheckEventExist(eventid)
    try {
        console.log(eventid , "Diddy get the evnt id")
        const res = await prisma.event.delete({
            where : {
                id : eventid,  
                organization : organisation 
            }
        })
        return true
    } catch (error) {
        throw new Error("An Error Occured while Deleting the Event")
    }
}

// NOTE THAT THE DATA WHEN SEND SHOULDNT BE SEND INDUVIDUALY ... LIKE ALLOF THEM MUSTT BE SEND HERE 
// editing feature 
// basically ak se main pura kar de sakne isme i dont have to everything 
export async function EditEvent (  eventid , title , description , event_date , price , registration_link , organisation , event_image ) {
    // need to check if an existing event like this exist or not right 
        try {
            await CheckEventExist(eventid)
            await prisma.event.update({
                where : {
                    id : eventid,
                    organisation : organisation
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

