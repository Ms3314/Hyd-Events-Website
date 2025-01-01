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
export async function AddEvent (title , description , event_date , price , registration_link , orgnisation , event_image ) {
    const res = await prisma.event.create({
        data : {
            title ,
            description ,
            event_date , 
        }
    })
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

