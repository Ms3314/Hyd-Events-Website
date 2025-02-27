import React ,{useEffect, useState} from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { storage } from '../../firebase/config';
import { getDownloadURL, ref , uploadBytes} from 'firebase/storage';
import {v4} from 'uuid';
import axios from 'axios';

const AddEvents = () => {
  const [event_imageUpload , setevent_imageUpload] = useState(null);
  const [currentEvent, setCurrentEvent] = useState({
    title: '',
    description: '',
    event_date: '', 
    time:'',
    venue: '',
    selectType:'2',
    price: '',
    registration_link: '',
    event_image : '',
  });

  const finalSubmit =async () => {
    console.log(currentEvent , "this is the current event")
    const response = await axios.post(`http://localhost:3000/api/v1/admin/event`,currentEvent , {
      headers : {
        "Authorization" : `Bearer ${localStorage.getItem("token")}`,
        "Content-Type" : "application/json",
      }
    })
    console.log(response , "tell mee ")
    setCurrentEvent({
      title: '',
      description: '',
      event_date: '',
      time:'',
      venue: '',
      selectType:'2',
      price: '',
      registration_link: '',
      event_image : '',
    });

  }
  // const checkAnyEmpty = () => {
  //    if (currentEvent.event_date == '') return false ;
  //    else if (currentEvent.description == '') return false ;
  //    else if (currentEvent.registration_link == '') return false ;
  //    else if (currentEvent.price == '') return false ;
  //    else if (currentEvent.selectType == '') return false ;
  //    else if (currentEvent.time == '') return false ;
  //    else if (currentEvent.title == '') return false ;
  //    else if (currentEvent.venue == '') return false ;
  //   else return true
  // }
  const handleEventSubmit = async (e) => {
    e.preventDefault();
    
    if (event_imageUpload == null) {
      toast.error("Please enter an Poster/related event_image");
      return ;
    } 
    console.log(event_imageUpload , "the event image ")
    console.log(currentEvent)
    
    const event_imageref = ref(storage , `event_images/${event_imageUpload.name + v4() }`)
    await uploadBytes(event_imageref , event_imageUpload).then( (res)=>{
      toast("The event_image has been uploaded");
      getDownloadURL(res.ref).then(async (ans)=>{
        console.log("this is the answer" , ans)
        currentEvent.event_image = ans;
        console.log("so the event image has been set ig" , currentEvent.event_image)
        await finalSubmit();
      });
    })
  };

  useEffect(()=>{
    console.log(currentEvent)
  },[currentEvent])

  return (
    <div className="form-container bg-gray-300 rounded-lg p-6 shadow-md min-h-screen flex justify-center items-center">
      <Toaster />
      <div className="flex flex-col bg-white justify-center items-center w-full max-w-md mx-auto shadow-lg rounded-lg">
        <form
          onSubmit={handleEventSubmit}
          className="w-full p-4 sm:p-6 md:p-8"
        >
          <div className="flex flex-col space-y-4">
          
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
              <input
                className="border-2 rounded-lg p-2 w-full"
                type="text"
                placeholder="Description"
                value={currentEvent.description}
                onChange={(e) =>
                  setCurrentEvent((prev)=>({ ...prev, description: e.target.value }))
                }
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <input
                className="border-2 rounded-lg p-2 w-full"
                type="date"
                value={currentEvent.event_date}
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

           
            <div className="flex flex-col sm:flex-row sm:space-x-4">
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
                value={currentEvent.price}
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
            <div className="flex flex-col">
              <input
                className="border-2 rounded-lg p-2 w-full"
                type="file"
                onChange={(e)=> {
                  setevent_imageUpload(e.target.files[0])
                }}
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

export default AddEvents

