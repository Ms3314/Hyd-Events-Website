import React, { useContext, useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from "axios"

const Cards = () => {
    const [loading , setLoading] = useState(true);
    const [eventData , setEventData] = useState([]);
    useEffect(() => {
        async function GetEvents() {
          try {
            const response = await axios.get("http://localhost:3000/api/v1/user/events");
            console.log(response.data)
            setEventData(response.data.events);
          } catch (error) {
            console.error("Error fetching events:", error);
          } finally {
            setTimeout(() => setLoading(false), 200); // Ensure loading stays for 10 sec
          }
        }
        GetEvents();
        console.log(eventData)
    }, []);
    
    if (loading) {
      return (
        <>
        <div className='h-screen flex flex-col align-middle justify-center'>
          <p className='text-slate-400 text-2xl'>Loading.....</p>
        </div>
        </>
      )
    }
    
    
    if (!eventData) {
      setTimeout(()=>{
        setLoading(true)
      },100)
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
    
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-6 m-8 p-8 '>
              {eventData.map((item , id) => (
                  <Cardcomponent  item={item} key={id} />
              ))}
          </div>
      </>
    
      )
    }
    






const Cardcomponent = ({item}) => {
    let navigate = useNavigate();
    console.log("is this a date" , item.fee)
    const eventDate = new Date(item.event_date)
    const date = eventDate.getDate();
    const month = eventDate.toLocaleString("en-US" , {month : "long"}).slice(0,3);
    console.log(month , date , "this might be the month and date")
    function SpecificEventPage  (item)  {
        // here i got the data of the card
        navigate(`/evntdetails/${item.id}`);
    }   
    function ClubDetailPage (item){
        navigate("/societydetails");
    }
    
    return (
     <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col  hover:border-2 border-r-secondary border-t-primary border-l-secondary border-b-secondary">
      
        <div className="h-64 relative">
                <img src={item.event_image} alt={item.title} className="w-full h-full object-contain" />
                <div className="h-5 w-32 bg-primary flex items-center justify-center absolute bottom-0 text-white rounded-sm">{item.EventType}</div>
          </div>
        <div className="p-4 ">
            <div className="flex gap-2 justify-evenly items-start">
                <div className="text-sm font-bold text-gray-700 uppercase">{month}
                <div className='text-primary text-lg-center'>{date}</div>
            </div>
            <div className="text-lg text-gray-600">{item.title} 
              <div className="text-sm text-gray-600">{item.venue}</div>
              <div className="text-sm text-gray-600">{item.time}</div>
                <div className="flex text-sm text-gray-600 inline gap-1">
                     {/* <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M856-390 570-104q-12 12-27 18t-30 6q-15 0-30-6t-27-18L103-457q-11-11-17-25.5T80-513v-287q0-33 23.5-56.5T160-880h287q16 0 31 6.5t26 17.5l352 353q12 12 17.5 27t5.5 30q0 15-5.5 29.5T856-390ZM513-160l286-286-353-354H160v286l353 354ZM260-640q25 0 42.5-17.5T320-700q0-25-17.5-42.5T260-760q-25 0-42.5 17.5T200-700q0 25 17.5 42.5T260-640Zm220 160Z"/></svg> */}
                    {item.price == " " ? "Free" : "₹" + item.price }
                </div>
                <button className='bottom-2 right-2 pb-4 pl-20 text-xl' key={item.id} onClick={() => SpecificEventPage(item)}>
                 <svg  xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#0000F5"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg>
                </button>
            </div>
            {/* <p className="text-sm text-gray-600">Venue</p>
            <p className="text-sm text-gray-600">Timings</p> */}
        </div>
      </div>
    </div>
    )
}

export default Cards