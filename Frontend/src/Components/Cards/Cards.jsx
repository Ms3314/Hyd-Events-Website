import React, { useContext, useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from "axios"

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

const Cards = ({ isEventsPage = false }) => {
    const [loading, setLoading] = useState(true);
    const [eventData, setEventData] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [selectedType, setSelectedType] = useState("all");
    
    useEffect(() => {
        async function GetEvents() {
          try {
            const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/v1/user/events`);
            setEventData(response.data.events);
            setFilteredEvents(response.data.events);
          } catch (error) {
            console.error("Error fetching events:", error);
          } finally {
            setTimeout(() => setLoading(false), 200);
          }
        }
        GetEvents();
    }, []);

    // Filter events when selectedType changes
    useEffect(() => {
        if (selectedType === "all") {
            setFilteredEvents(eventData);
        } else {
            setFilteredEvents(eventData.filter(event => event.event_type === selectedType));
        }
    }, [selectedType, eventData]);

    if (loading) {
      return (
        <div className='h-screen flex flex-col align-middle justify-center'>
          <p className='text-slate-400 text-2xl'>Loading.....</p>
        </div>
      );
    }

    if (!eventData?.length) {
      return (
        <div className='h-screen flex flex-col align-middle justify-center'>
          <p className='text-slate-400 text-2xl'>No events Found !!</p>
        </div>
      );
    }

    // Get unique event types for filter dropdown
    const eventTypes = ["all", ...new Set(eventData.map(event => event.event_type))];
    
    return (
      <>
        {isEventsPage && (
          <div className="flex justify-center my-4">
            <select 
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="border-2 rounded-lg p-2 w-64"
            >
              {eventTypes.map(type => (
                <option key={type} value={type}>
                  {type === "all" ? "All Events" : type}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-6 m-8 p-8'>
          {(isEventsPage ? filteredEvents : eventData.slice(0, 8)).map((item, id) => (
            <Cardcomponent item={item} key={id} />
          ))}
        </div>
      </>
    );
}

const Cardcomponent = ({item}) => {
    let navigate = useNavigate();
    const eventDate = new Date(item.event_date);
    const date = eventDate.getDate();
    const month = eventDate.toLocaleString("en-US", {month: "long"}).slice(0, 3);
    const status = getEventStatus(item.event_date);

    function SpecificEventPage(item) {
        navigate(`/eventsdetail/${item.id}`);
    }

    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:border-2 border-r-secondary border-t-primary border-l-secondary border-b-secondary">
        <div className="h-64 relative">
          <img src={item.event_image} alt={item.title} className="w-full h-full object-contain" />
          <div className="flex absolute bottom-0 w-full">
            <div className={`h-5 ${status.className} flex items-center justify-center text-white rounded-sm px-3 ml-1`}>
              {status.text}
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex gap-2 justify-evenly items-start">
            <div className="text-sm font-bold text-gray-700 uppercase">
              {month}
              <div className='text-primary text-lg-center'>{date}</div>
            </div>
            <div className="text-lg text-gray-600">
              {item.title}
              <div className="text-sm text-gray-600">{item.venue}</div>
              <div className="text-sm text-gray-600">{item.time}</div>
              <div className="flex text-sm text-gray-600 inline gap-1">
                {item.price === " " ? "Free" : "₹" + item.price}
              </div>
              <button 
                className='bottom-2 right-2 pb-4 pl-20 text-xl' 
                onClick={() => SpecificEventPage(item)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#0000F5">
                  <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Cards