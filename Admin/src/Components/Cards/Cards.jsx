import React,{useContext ,createContext,useState} from 'react'
import img1 from '../../assets/img1.png'
import pic2 from '../../assets/pic2.png'
import { useNavigate } from 'react-router-dom'
import {MyDetail} from '../../App'
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import Navbar from '../Navbar/Navbar'
import '../Pages/style.css'


const Cards = () => {
    const Content = [
    {
        id:1,
        Venue:'MJCET hyderabad',
        month:'oct',
        Date:'23',
        EventName:'Dev Expedation',
        Timings:'1:00-2:00',
        imgSrc:img1,
        status:'upcoming'
    },
    {
        id:2,
        Venue:'MJCET hyderabad',
        month:'oct',
        Date:'23',
        EventName:'Dev Expedation',
        Timings:'1:00-2:00',
        imgSrc:pic2,
         status:'Expired'
      
    },
    {
        id:3,
        Venue:'MJCET hyderabad',
        month:'oct',
        Date:'23',
        EventName:'Dev Expedation',
        Timings:'1:00-2:00',
        imgSrc:img1,
         status:'upcoming'
       
    },
    {
        id:4,
        Venue:'MJCET hyderabad',
        month:'oct',
        Date:'23',
        EventName:'Dev Expedation',
        Timings:'1:00-2:00',
        imgSrc:img1,
         status:'Expired'
   
    },   
]
  return (
    
<>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center gap-6 m-8 p-8 md:px-12 md:py-8 lg:mx-60 lg:my-16 lg:px-40'>
        {Content.map((item , id) => (
            <Cardcomponent item={item} key={id} />
    ))}
     
    </div>
</>

  )
}


const Cardcomponent = ({item}) => {
    let navigate = useNavigate();
    const { setContent} = useContext(MyDetail)
   

    function EditEventPage(item)  {
        // setContent(item)
        navigate("/editevent");
    }   
    
    
    return (
        
     <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col 
                     hover:border-2 border-r-secondary border-t-primary border-l-secondary border-b-secondary">
      
      <div className="h-64 relative">
             <img src={item.imgSrc} alt={item.EventName} className="w-full h-full object-contain" />
                <div className="h-5 w-32 bg-primary flex items-center justify-center absolute bottom-0 text-white rounded-sm">{item.EventType}</div>
                </div>
        <div className="p-4">
            <div className="flex flex-col">
                <div className="flex text-sm flex-inline font-semibold text-gray-700 uppercase lg:gap-6 md:gap-4 gap-4 ">{item.month} <span className='text-primary text-lg-center'>{item.Date} </span>||
                  <div className="text-sm text-gray-600">{item.Timings}</div>||
                  <div className="text-sm text-red-600">{item.status}</div>
                </div>
            
            <div className="text-lg text-gray-600 uppercase font-bold m-1">{item.EventName}  </div>
              <div className="text-sm text-gray-600 m-1">{item.Venue}</div>
              </div>
        
    <AlertDialog.Root>
		<AlertDialog.Trigger asChild>
		<button className='bottom-2 items-center px-4 py-1 left-8 bg-slate-200 text-black text-lg text-white font-bold rounded-lg shadow-md'>Delete</button>
		
		
        </AlertDialog.Trigger>
		      <AlertDialog.Portal>
			      <AlertDialog.Overlay className="AlertDialogOverlay" />
			        <AlertDialog.Content className="AlertDialogContent">
				        <AlertDialog.Title className="AlertDialogTitle">
				        	Are you absolutely sure?
				        </AlertDialog.Title>
				      <AlertDialog.Description className="AlertDialogDescription">
					    This action cannot be undone. This will permanently delete your
					    event and remove your data from our servers.
				      </AlertDialog.Description>
				     <div style={{ display: "flex", gap: 25, justifyContent: "flex-end" }}>
					    <AlertDialog.Cancel asChild>
						    <button className="Button mauve">Cancel</button>
					    </AlertDialog.Cancel>
					  <AlertDialog.Action asChild>
						<button className="Button red">Yes, delete event</button>
				  	</AlertDialog.Action>
				    </div>
			      </AlertDialog.Content>
		      </AlertDialog.Portal>
	      </AlertDialog.Root>
 
    <button className='flex-inline bottom-2 bg-slate-200 rounded-lg text-black py-1 px-4 w-16 text-lg font-bold m-4 left-8 text-center shadow-md' key={item.id} onClick={()=>EditEventPage(item)}>Edit</button> 
      </div>
    </div>

    )
}

export default Cards