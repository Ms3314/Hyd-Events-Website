import React from 'react'
import img1 from '../../assets/img1.png'
import pic2 from '../../assets/pic2.png'


const PreEventsCards = () => {
    const Data =[
        {
            id:1,
            imgSrc:img1,
            month:'oct',
            Date:'23',
            EventName:'Dev Expedation',
            Venue:'Hyderabad',
            Timings:'1:00-2:00',
            fee:49,
            // description:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iusto mollitia voluptas at quibusdam ratione veritatis asperiores maiores libero ducimus voluptatum, eligendi quos dicta eum, ab non quis ad? Omnis'
            

        },
        {
            id:2,
            imgSrc:pic2,
            month:'oct',
            Date:'23',
            EventName:'Dev Expedation',
            Venue:'Hyderabad',
            Timings:'1:00-2:00',
            fee:49,
            // description:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iusto mollitia voluptas at quibusdam ratione veritatis asperiores maiores libero ducimus voluptatum, eligendi quos dicta eum, ab non quis ad? Omnis'
            

        },
        {
            id:3,
            imgSrc:img1,
            month:'oct',
            Date:'23',
            EventName:'Dev Expedation',
            Venue:'Hyderabad',
            Timings:'1:00-2:00',
            fee:49,
            // description:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iusto mollitia voluptas at quibusdam ratione veritatis asperiores maiores libero ducimus voluptatum, eligendi quos dicta eum, ab non quis ad? Omnis'
            

        },
        {
            id:4,
            imgSrc:pic2,
            month:'oct',
            Date:'23',
            EventName:'Dev Expedation',
            Venue:'Hyderabad',
            Timings:'1:00-2:00',
            fee:49,
            // description:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iusto mollitia voluptas at quibusdam ratione veritatis asperiores maiores libero ducimus voluptatum, eligendi quos dicta eum, ab non quis ad? Omnis'
            

        },
        {
            id:5,
            imgSrc:img1,
            month:'oct',
            Date:'23',
            EventName:'Dev Expedation',
            Venue:'Hyderabad',
            Timings:'1:00-2:00',
            fee:49,
            // description:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iusto mollitia voluptas at quibusdam ratione veritatis asperiores maiores libero ducimus voluptatum, eligendi quos dicta eum, ab non quis ad? Omnis'
            

        },
        {
            id:6,
            imgSrc:pic2,
            month:'oct',
            Date:'23',
            EventName:'Dev Expedation',
            Venue:'Hyderabad',
            Timings:'1:00-2:00',
            fee:49,
            // description:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iusto mollitia voluptas at quibusdam ratione veritatis asperiores maiores libero ducimus voluptatum, eligendi quos dicta eum, ab non quis ad? Omnis'
            

        },
    ]
  return (
    <div>
         <h2 className='flex text-black text-2xl font-bold uppercase pt-2 mt-2 pl-6'>previous events</h2>
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-center gap-4 m-6 p-6 md:px-8 md:py-6 lg:mx-40 lg:p-30'>
        {Data.map((item) => (
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <div className="h-64 relative">
                  <img src={item.imgSrc} alt={item.EventName} className="w-full h-full object-contain" />
                  <svg className='absolute top-2 right-2 text-yellow-500 text-xl' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/></svg>
            </div>
            <div className="p-4">
             <div className="flex justify-evenly items-start mb-4">
                <div className="text-sm font-bold text-gray-700 uppercase">{item.month}
                 <div className='text-primary text-lg-center'>{item.Date}</div>
                </div>


          
          <div className="text-lg text-gray-600">{item.EventName} 
            <div className="text-sm text-gray-600">{item.Venue}</div>
            <div className="text-sm text-gray-600">{item.Timings}</div>
            <div className="flex text-sm text-gray-600 inline gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M856-390 570-104q-12 12-27 18t-30 6q-15 0-30-6t-27-18L103-457q-11-11-17-25.5T80-513v-287q0-33 23.5-56.5T160-880h287q16 0 31 6.5t26 17.5l352 353q12 12 17.5 27t5.5 30q0 15-5.5 29.5T856-390ZM513-160l286-286-353-354H160v286l353 354ZM260-640q25 0 42.5-17.5T320-700q0-25-17.5-42.5T260-760q-25 0-42.5 17.5T200-700q0 25 17.5 42.5T260-640Zm220 160Z"/></svg>
                {item.fee}</div>

          </div>
          {/* <p className="text-sm text-gray-600">Venue</p>
          <p className="text-sm text-gray-600">Timings</p> */}
        </div>
        </div>
        <div className=''>
            <button className='bottom-2 right-2 pl-72 pb-8 text-xl' key={item.id} onClick={() => handleClick(item.id)}>
            <svg  xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#0000F5"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg>
          </button>
           
        </div>
        </div>
   
    ))}
   </div>
   <div className='mr-16 justify-items-end'>
     <button className="flex bottom-2 right-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm 
                        hover:bg-blue-700 transition duration-200">
                View All Events
     </button>
    </div>
    </div>
  )
}

export default PreEventsCards