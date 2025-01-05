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
    console.log(res , "the data we send");
    return res ; 
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
                organisation ,
                event_image 
            }
        })
        return res 
    } catch (error) {
        return new Error(error)
    }
    
}

// NOTE THAT THE DATA WHEN SEND SHOULDNT BE SEND INDUVIDUALY ... LIKE ALLOF THEM MUSTT BE SEND HERE 
// edding feature 
// basically ak se main pura kar de sakne isme i dont have to everything 
export async function EditEvent (title , description , event_date , price , registration_link , organisation , event_image ) {
    try {
        const res = await prisma.event.create({
            where : {
                email 
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

