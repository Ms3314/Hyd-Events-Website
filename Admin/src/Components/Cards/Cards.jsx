import {useState, useEffect} from 'react'

import { useNavigate } from 'react-router-dom'
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import '../Pages/style.css'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import { deleteImage } from '../../firebase/deleteImage'
import {RotatingLines} from 'react-loader-spinner'

const getEventStatus = (eventDate) => {
  const today = new Date();
  const eventDay = new Date(eventDate);
  
  // Reset hours to compare just the dates
  today.setHours(0, 0, 0, 0);
  eventDay.setHours(0, 0, 0, 0);
  
  if (eventDay.getTime() === today.getTime()) {
    return { text: "Going On", className: "bg-green-500" };
  } else if (eventDay < today) {
    return { text: "Finished", className: "bg-red-500" };
  } else {
    return { text: "Latest", className: "bg-blue-500" };
  }
};

const Cards = () => {
const [loading , setLoading] = useState(true);
const [eventData , setEventData] = useState([]);
useEffect(() => {
  const cachedEvents = localStorage.getItem("events")
  const lastFetched =  localStorage.getItem("events_lastFetched")
  const tenMin = 10*60*1000;
  if(!cachedEvents || !(cachedEvents.length) || !lastFetched || !(Date.now - lastFetched < tenMin)) {
    async function GetEvents() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/v1/admin/event`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        });
        console.log(response.data.events)
        setEventData(response.data.events);
        localStorage.setItem("events" , JSON.stringify(response.data.events))
        localStorage.setItem("events_lastFetched" , Date.now()); // this thing stores the time stamp
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setTimeout(() => setLoading(false), 200); // Ensure loading stays for 10 sec
      }
    }
    GetEvents();
  }
  else {
    setTimeout(() => setLoading(false), 200); // Ensure loading stays for 10 sec
    setEventData(JSON.parse(cachedEvents));
  }
  
}, []);

if (loading) {
  return (
    <>
    <div className='h-screen w-full flex flex-col items-center justify-center'>
      <RotatingLines
      visible={true}
      height="50"
      width="50"
      color="red"
      strokeWidth="5"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
      wrapperStyle={{}}
      wrapperClass=""
      /> 
    </div>
    </>
  )
}


if (!eventData.length) {
  return (
    <>
    <div className='h-screen flex flex-col align-middle justify-center'>
      <p className='text-slate-400 text-2xl'>No events Found , Add your first One !!</p>
    </div>
    </>
  )
}



return (
  <>
      <Toaster/>

        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center gap-6 m-8 p-8 md:px-12 md:py-8 lg:mx-60 lg:my-16 lg:px-40'>
          {eventData.map((item , id) => (
              <Cardcomponent setLoading={setLoading} setEventData={setEventData} item={item} key={id} />
          ))}
      </div>
  </>

  )
}


const Cardcomponent = ({item , setEventData , setLoading}) => {
    let navigate = useNavigate();
    const eventDate = new Date(item.event_date);
    const date = eventDate.getDate();
    const month = eventDate.toLocaleString("en-US", {month: "long"}).slice(0, 3);
    const status = getEventStatus(item.event_date);

    function EditEventPage(item)  {
        navigate(`/editevent/${item.id}`);
    }   
    
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col 
                     hover:border-2 border-r-secondary border-t-primary border-l-secondary border-b-secondary">
      
          <div className="h-64 relative">
            <img src={item.event_image} alt={item.title} className="w-full h-full object-contain" />
            <div className="flex absolute bottom-0 w-full">
             
              <div className={`h-5 ${status.className} text-[17px] flex items-center justify-center text-white rounded-sm px-3 ml-1`}>
                {status.text}
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="flex flex-col">
              <div className="flex text-sm flex-inline font-semibold text-gray-700 uppercase lg:gap-6 md:gap-4 gap-4">
                {month} <span className='text-primary text-lg-center'>{date}</span>||
                <div className="text-sm text-gray-600">{item.time}</div>
              </div>
              <div className="text-lg text-gray-600 uppercase font-bold m-1">{item.title}</div>
              <div className="text-sm text-gray-600 m-1">{item.venue}</div>
            </div>
            <AlertComponent setLoading={setLoading} eventdata={item} setEventData={setEventData}/>
            <button 
              className='flex-inline bottom-2 bg-slate-200 rounded-lg text-black py-1 px-4 w-16 text-lg font-bold m-4 left-8 text-center shadow-md' 
              key={item.id} 
              onClick={()=>EditEventPage(item)}
            >
              Edit
            </button> 
          </div>
        </div>
    )
}

const AlertComponent = ({eventdata , setEventData , setLoading}) => {
  const eventid = eventdata.id 
  const handleDeleteEvent = async () => {
    const response = await axios.delete(`${import.meta.env.VITE_SERVER_URL}/api/v1/admin/event`, {
      headers : {
        "Authorization" : `Bearer ${localStorage.getItem("token")}`,
        "Content-Type" : "application/json",
      } ,
      params: { eventid }  
    })
    setLoading(true);
    await deleteImage(eventdata.event_image)
    setEventData((prev)=> prev.filter(event => event.id != eventid))
    localStorage.removeItem("events")
    localStorage.removeItem("events_lastFetched")
    if (response.data.status) {
      toast.success("The Event has been Deleted")
      setLoading(false);
    }
  }
  return (
    <>
      <AlertDialog.Root>
		<AlertDialog.Trigger asChild>
		<button className='bottom-2 items-center px-4 py-1 left-8 bg-red-600  text-lg text-white font-bold rounded-lg shadow-md'>Delete</button>
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
						<button className="Button red" onClick={handleDeleteEvent}>Yes, delete event</button>
				  	</AlertDialog.Action>
				    </div>
			      </AlertDialog.Content>
		      </AlertDialog.Portal>
	  </AlertDialog.Root>
    </>
  )
}

export default Cards