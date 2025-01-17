import React ,{useState} from 'react'

const EditEvent = () => {

  const [events, setEvents] = useState([]);
  const [currentEvent, setCurrentEvent] = useState({
    title: '',
    description: '',
    date: '',
    time:'',
    venue: '',
    selectType:'',
    price: '',
    formLink: ''
  });

  const handleEventSubmit = (e) => {
    e.preventDefault();
    setEvents(prevEvents => [prevEvents, currentEvent]);
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
  };
  return (
    <>
    
    <div  className="form-container bg-gray-300 rounded-lg p-6 shadow-md min-h-screen flex justify-center items-center">
      <div  className="flex flex-col bg-white justify-center items-center w-full max-w-md mx-auto shadow-lg rounded-lg">
       
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
                  setCurrentEvent({ currentEvent, title: e.target.value })
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
                  setCurrentEvent({ currentEvent, description: e.target.value })
                }
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <input
                className="border-2 rounded-lg p-2 w-full"
                type="date"
                value={currentEvent.date}
                onChange={(e) =>
                  setCurrentEvent({ currentEvent, date: e.target.value })
                }
              />
              <input
                className="border-2 rounded-lg p-2 w-full"
                type="time"
                value={currentEvent.time}
                onChange={(e) =>
                  setCurrentEvent({ currentEvent, time: e.target.value })
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
                  setCurrentEvent({ currentEvent, venue: e.target.value })
                }
              />
            </div>

           
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <select 
                name="price"
                id="price"
                value={currentEvent.selectType}
                onChange={(e) =>
                  setCurrentEvent({ currentEvent, selectType: e.target.value })
                }
                className="border-2 rounded-lg p-2 w-full"
              >
                <option value="1">Paid</option>
                <option value="2">Free</option>
              </select>
           
            <input
                className="border-2 rounded-lg p-2 w-full"
                type="text"
                placeholder="Price"
                value={currentEvent.price}
                onChange={(e) =>
                  setCurrentEvent({ currentEvent, price: e.target.value })
                }
              />
             </div>

            <div className="flex flex-col">
              <input
                className="border-2 rounded-lg p-2 w-full"
                type="url"
                placeholder="Form Link"
                value={currentEvent.formLink}
                onChange={(e) =>
                  setCurrentEvent({ currentEvent, formLink: e.target.value })
                }
              />
            </div>

            {/* for uploading banner */}
            <div className="flex flex-col">
              <input
                className="border-2 rounded-lg p-2 w-full"
                type="file"
              />
            </div>
            {/* for uploading main image */}
            <div className="flex flex-col">
              <input
                className="border-2 rounded-lg p-2 w-full"
                type="file"
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
    
    </>
  );
   
}

export default EditEvent


