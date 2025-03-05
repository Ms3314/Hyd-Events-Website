import React ,{useEffect, useState} from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { storage } from '../../firebase/config';
import { getDownloadURL, ref , uploadBytes} from 'firebase/storage';
import {v4} from 'uuid';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { deleteImage } from '../../firebase/deleteImage';
import { RotatingLines } from 'react-loader-spinner';


// firstly - we need to get the axios request get done and make it work 
// he get and the put one then make the backend routed for this thing 
// then handle the deletion of the preveious image 


const EditEvent = () => {
  const {isLoading , setIsLoading} = useState(false);
  const {eventid} = useParams();
  const [event_imageUpload , setevent_imageUpload] = useState(null);
  const [eventType, setEventType] = useState("1");
  const [deleteImageUrl , setDeleteImageUrl] = useState("");
  const [currentEvent, setCurrentEvent] = useState({
    title: '',
    Description: '',
    event_date: '', 
    time:'',
    venue: '',
    selectType:'2',
    price: '',
    registration_link: '',
    event_image : '',
    deadline : '' ,
    size : '' ,
    event_type: 'General',
  });
  const eventDate = new Date(currentEvent?.event_date)
  const date = eventDate.getDate();
  const month = eventDate.toLocaleString("en-US", { month: "long" }).slice(0, 3);
  
  useEffect(()=>{
    async function InitialRender() {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/v1/admin/event/${eventid}` ,  {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        }
      });
      console.log(response?.data)
      setCurrentEvent(response.data.events) ;
      setDeleteImageUrl(response.data.event_image)
    }
    InitialRender();
  },[])

  const finalSubmit = async () => {
    const eventData = {
      eventid : currentEvent.id,
      title: currentEvent.title,
      Description: currentEvent.Description,
      event_date: currentEvent.event_date,
      time: currentEvent.time,
      venue: currentEvent.venue,
      price: currentEvent.selectType === "2" ? 0 : currentEvent.price,
      registration_link: currentEvent.registration_link,
      event_image: currentEvent.event_image,
      deadline: currentEvent.deadline,
      size: currentEvent.size,
      event_type: currentEvent.event_type
    };

    const response = await axios.put(`${import.meta.env.VITE_SERVER_URL}/api/v1/admin/event`, eventData, {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      }
    });
    if (event_imageUpload && event_imageUpload != deleteImageUrl) {
       await deleteImage(deleteImageUrl)
    }
    if (response.status === 200) {
      toast.success("Event Updated Successfully!!");
    } else {
      toast.error("Some thing went wrong ")
    }
  }

  const handleEventSubmit = async (e) => {
    e.preventDefault();
    
    if (event_imageUpload != null) {
      const event_imageref = ref(storage , `event_images/${event_imageUpload.name + v4() }`)
    await uploadBytes(event_imageref , event_imageUpload).then( (res)=>{
      getDownloadURL(res.ref).then(async (ans)=>{
        // console.log("this is the answer" , ans)
        currentEvent.event_image = ans;
        // console.log("so the event image has been set ig" , currentEvent.event_image)
        await finalSubmit();
      });
    })
    } 
    // console.log(event_imageUpload , "the event image ")
    // console.log(currentEvent)
    await finalSubmit()
    
  };

  if (isLoading) {
    return (
      <>
      <div className='h-screen w-full flex flex-col justify-items-center justify-center'>
        <RotatingLines
        visible={true}
        height="50"
        width="50"
        color="grey"
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

  return (
    <div className='flex flex-col items-center justify-center '>
      <Toaster />
      <div className="flex flex-col lg:flex-row gap-10 bg-white justify-center items-center w-[90%]  mx-auto m-10 rounded-lg">
        <div className="w-full mt-10">
          <div className="flex flex-col w-full gap-5 border-2 p-3 rounded-sm ">
    
              <div className="bg-white rounded-lg border-2 p-6 mb-6">
                <div className="flex flex-col gap-3">
                  <div className="w-full md:w-2/3 ">
                    <h2 className="text-2xl font-bold mb-3 text-gray-800">{currentEvent?.title == "" ? "Untitiled" : currentEvent?.title}</h2> 
                    {/* <h3 className="text-lg text-gray-600 mb-4">{data?.EventType} by {data?.organisation[0].name} </h3> */}
                    
                    <div className="space-y-3">
                      <div className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                          <path d="M480-80q-106 0-173-33.5T240-200q0-24 14.5-44.5T295-280l63 59q-9 4-19.5 9T322-200q13 16 60 28t98 12q51 0 98.5-12t60.5-28q-7-8-18-13t-21-9l62-60q28 16 43 36.5t15 45.5q0 53-67 86.5T480-80Zm1-220q99-73 149-146.5T680-594q0-102-65-154t-135-52q-70 0-135 52t-65 154q0 67 49 139.5T481-300Zm-1 100Q339-304 269.5-402T200-594q0-71 25.5-124.5T291-808q40-36 90-54t99-18q49 0 99 18t90 54q40 36 65.5 89.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520Zm0-80Z"/>
                        </svg>
                        <span>{currentEvent?.venue == "" ? "Nothing yet" :currentEvent?.venue }</span>
                      </div>
                      
                      <div className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                          <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"/>
                        </svg>
                        <span>{isNaN(date) ? "" : date} {month == "Inv" ? "Nothing yet" : month} </span>
                      </div>
                      
                      
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Event Description */}
              <div className="bg-white rounded-lg border-2 p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">About This Event</h3>
                <div className="prose max-w-none text-gray-700">
                  {currentEvent?.Description ==  "" ? "Nothing yet !! try typing something" : currentEvent?.Description  }
                </div>
              </div>

              <div className="flex flex-col">
                  <input
                    className="border-2 rounded-lg p-2 w-full"
                    type="text"
                    placeholder="Event Name"
                    value={currentEvent.title}
                    onChange={(e) =>
                      setCurrentEvent((prev) => ({ ...prev , title : e.target.value }))
                    }
                  />
                </div>

              
                <div className="flex flex-col">
                <textarea
                    className="border-2 rounded-lg p-2 w-full min-h-[10rem] resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter event Description..."
                    value={currentEvent.Description}
                    onChange={(e) =>
                      setCurrentEvent((prev) => ({ ...prev, Description: e.target.value }))
                    }
                />
                </div>
          </div>
        </div>
        <form
          onSubmit={handleEventSubmit}
          className="w-full p-4 sm:p-6 md:p-8 border-2 mt-2"
        >
          <div className="flex flex-col space-y-4">
            



            <label htmlFor="Date of the event">Date and time of Event : </label>
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <input
                className="border-2 rounded-lg p-2 w-full"
                type="date"
                value={currentEvent.event_date.split("T")[0]}
                onChange={(e) =>
                  setCurrentEvent((prev)=> ({ ...prev, event_date: e.target.value }))
                }
              />
              
              <input
                className="border-2 rounded-lg p-2 w-full"
                type="time"
                value={currentEvent.time}
                onChange={(e) =>
                  setCurrentEvent((prev) => ({ ...prev, time: e.target.value }))
                }
                placeholder="Time"
              />
            </div>

            <label htmlFor="Deadline event">Deadline for Registration</label>
            <input
                className="border-2 rounded-lg p-2 w-full"
                type="date"
                value={currentEvent.deadline}
                onChange={(e) =>
                  setCurrentEvent((prev)=> ({ ...prev, deadline: e.target.deadline }))
                }
              />
          
            <div className="flex flex-col">
              <input
                className="border-2 rounded-lg p-2 w-full"
                type="text"
                placeholder="Venue"
                value={currentEvent.venue}
                onChange={(e) =>
                  setCurrentEvent((prev) => ({ ...prev , venue: e.target.value }))
                }
              />
            </div>

            
            <div className="flex flex-col sm:flex-row gap-2 sm:space-x-4">
              <select 
                name="price"
                id="price"
                value={currentEvent.selectType}
                onChange={(e) =>
                  setCurrentEvent((prev)=> ({ ...prev, selectType: e.target.value }))
                }
                className="border-2 rounded-lg p-2 w-full"
              >
                <option value="1">Paid</option>
                <option value="2">Free</option>
              </select>
            
            {currentEvent.selectType == "1" ? (
              <input
              className={`border-2 rounded-lg p-2 disabled w-full `}
              type="text"
              placeholder="Price"
              value={currentEvent.price}
              onChange={(e) =>
                setCurrentEvent((prev) => ({ ...prev , price: e.target.value }))
              }
              />
            ): 
            (
              <input
                disabled
                className={`border-2 rounded-lg p-2 disabled w-full `}
                type="text"
                placeholder="Price"
                value={currentEvent.price == 0 ? "" : currentEvent.price}
                onChange={(e) =>
                  setCurrentEvent((prev) => ({ ...prev, price: e.target.value }))
                }
                />
            )
          } 
            </div>

            

            <div className="flex flex-col">
              <input
                className="border-2 rounded-lg p-2 w-full"
                type="text"
                placeholder="Form Link"
                value={currentEvent.registration_link}
                onChange={(e) =>
                  setCurrentEvent((prev) => ({ ...prev, registration_link: e.target.value }))
                }
              />
            </div>

            {/* this is where we input the event_image  */}
            <div className="flex flex-col md:flex-row gap-4">
              <label htmlFor="">Upload your poster / Event display Image</label>
              <input
                className="border-2 rounded-lg p-2 w-full"
                type="file"
                onChange={(e)=> {
                  setevent_imageUpload(e.target.files[0])
                }}
              />
            </div>
            {/* make a state and display a text box when option 4 is selected or make something liek i can input custom events when i chose other  */}
            <div className='gap-5 flex flex-col md:flex-row'>
              <select 
                name="eventType" 
                id="eventType" 
                value={eventType}
                onChange={(e) => {
                  setEventType(e.target.value);
                  setCurrentEvent(prev => ({
                    ...prev,
                    event_type: e.target.value === "4" ? "" : e.target.options[e.target.selectedIndex].text
                  }));
                }}
                className="border-2 rounded-lg p-2 w-full"
              >
                <option value="1">Hackathon</option>
                <option value="2">Tech Event</option>
                <option value="3">Fun Event</option>
                <option value="4">other</option>
              </select>
              <input 
                type="text" 
                disabled={eventType !== "4"}
                value={eventType === "4" ? currentEvent.event_type : ""}
                onChange={(e) => setCurrentEvent(prev => ({ ...prev, event_type: e.target.value }))}
                placeholder="Enter custom event type"
                className="border-2 rounded-lg p-2 w-full" 
              />
            </div>
            
            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-black hover:bg-black text-white font-bold py-2 px-6 rounded-lg"
              >
                Add Event
              </button>
            </div>
          </div>
        </form>
      </div>
    
    </div>
  );
   
}



export default EditEvent

