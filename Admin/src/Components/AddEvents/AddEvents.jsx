import React ,{useEffect, useState} from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { storage } from '../../firebase/config';
import { getDownloadURL, ref , uploadBytes} from 'firebase/storage';
import {v4} from 'uuid';

const AddEvents = () => {
  const [imageUpload , setImageUpload] = useState(null);
  const [events, setEvents] = useState([]);
  const [isFree , setIsFree] = useState();
  const [currentEvent, setCurrentEvent] = useState({
    title: '',
    description: '',
    date: '',
    time:'',
    venue: '',
    selectType:'2',
    price: '',
    formLink: '',
    image : '',
  });

  const finalSubmit = () => {
    console.log(currentEvent , "this is the current event")
    console.log(events , "these are the events");
    setCurrentEvent({
      title: '',
      description: '',
      date: '',
      time:'',
      venue: '',
      selectType:'',
      price: '',
      formLink: ''
    });

  }
  // const checkAnyEmpty = () => {
  //    if (currentEvent.date == '') return false ;
  //    else if (currentEvent.description == '') return false ;
  //    else if (currentEvent.formLink == '') return false ;
  //    else if (currentEvent.price == '') return false ;
  //    else if (currentEvent.selectType == '') return false ;
  //    else if (currentEvent.time == '') return false ;
  //    else if (currentEvent.title == '') return false ;
  //    else if (currentEvent.venue == '') return false ;
  //   else return true
  // }
  const handleEventSubmit = (e) => {
    e.preventDefault();
    
    if (imageUpload == null) {
      toast.error("Please enter an Poster/related image");
      return ;
    } 
    console.log(currentEvent)
    
    const imageref = ref(storage , `images/${imageUpload.name + v4() }`)
    uploadBytes(imageref , imageUpload).then((res)=>{
      toast("The image has been uploaded");
      getDownloadURL(res.ref).then((ans)=>{
        currentEvent.image = ans;
      });
      finalSubmit();
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
                value={currentEvent.date}
                onChange={(e) =>
                  setCurrentEvent((prev)=> ({ ...prev, date: e.target.value }))
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
                value={currentEvent.formLink}
                onChange={(e) =>
                  setCurrentEvent((prev) => ({ ...prev, formLink: e.target.value }))
                }
              />
            </div>

            {/* this is where we input the image  */}
            <div className="flex flex-col">
              <input
                className="border-2 rounded-lg p-2 w-full"
                type="file"
                onChange={(e)=> {
                  setImageUpload(e.target.files[0])
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

