
import { MyContext } from "../../App"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"


const EventsDetailpage = () => {
 
  const {data , setData} = useContext(MyContext)
  console.log(data , "This is the data")
  const detail = data

  let navigate = useNavigate();
  function ClubDetailPage (data){
    console.log(data)
    setData(data)
    navigate("/societydetails");
}
  return (
    <>
    <div>  
        {/* details  */}
    <div className='grid lg:grid-cols-3 grid-cols-1 '>
      {/* this is the details about the event and the org page  */}
          <div className='col-span-2 gap-2 box-content bg-blue-50 p-4 rounded-lg shadow-lg items-center justify-center m-5'>

          <div className='content-fit relative gap-10  m-4 flex flex-col lg:flex-row '>
              {/* Uncomment and use the image source below */}
              {/* <img src={detail.organization.orgPic} alt={detail.EventName} className="w-full h-full object-cover rounded-t-2xl"/> */}
                <img 
                  className="w-44 h-44 object-fit rounded-xl " 
                  alt={detail.EventName} 
                  src={detail.eventImage}
              />
                <h2 className='font-bold text-2xl sm:text-2xl lg:text-4xl mt-4  text-black whitespace-nowrap'>
                  {detail.title}
                </h2>
          </div>


          <div className='flex items-center justify-start text-lg'>
              <svg  className='p-1' xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000"><path d="M480-80q-106 0-173-33.5T240-200q0-24 14.5-44.5T295-280l63 59q-9 4-19.5 9T322-200q13 16 60 28t98 12q51 0 98.5-12t60.5-28q-7-8-18-13t-21-9l62-60q28 16 43 36.5t15 45.5q0 53-67 86.5T480-80Zm1-220q99-73 149-146.5T680-594q0-102-65-154t-135-52q-70 0-135 52t-65 154q0 67 49 139.5T481-300Zm-1 100Q339-304 269.5-402T200-594q0-71 25.5-124.5T291-808q40-36 90-54t99-18q49 0 99 18t90 54q40 36 65.5 89.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520Zm0-80Z"/></svg>
              {detail.location}
          </div>
          <div className='flex  text-lg'>
              <svg className='p-1' xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"/></svg>
              {detail.eventDate} 
          </div>
          <div className='flex mb-2 p-1 text-lg'>
                Conducted by { detail.organization?.name ?  (detail.organization?.name) : ""} 
                <button className="flex rounded-lg shadow-lg items-center justify-center bg-black shadow-sm h-6 p-4 text-lg mb-2 ml-2 p-1 text-white" onClick={() => ClubDetailPage(data)}>About Us</button>
          </div>
          </div>
      {/* this will be the pricing section and the form link redirect page */}
          <div className='bg-blue-50 box-content text-black p-4 rounded-lg shadow-lg h-80 m-5'>
              <div className='font-bold text-2xl  p-4'>
              ₹{detail.price}
              </div>
              <a className="flex w-64 px-4 py-2 mb-3 bg-blue-600  item-center justify-center text-white rounded-lg text-xl 
                        hover:bg-blue-700 transition duration-200" href={detail.formLink} > Register
              </a>
              <div className="flex flex-col gap-3 mt-2">
                <div className='inline-flex m-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000"><path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z"/></svg>
                  {/* <div className='text-xl font-semibold'> */}
                    <div className='font-medium text-lg top-0 px-1 left-0 text-black rounded-tr-lg whitespace-nowrap'>Registered
                      <h1 className='text-sm font-normal whitespace-nowrap'>{detail.formClicks} </h1>
                    </div>
                </div>
                <div className=' flex m-1'>
                      <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000"><path d="M38.67-160v-100q0-34.67 17.83-63.17T105.33-366q69.34-31.67 129.67-46.17 60.33-14.5 123.67-14.5 63.33 0 123.33 14.5T611.33-366q31 14.33 49.17 42.83T678.67-260v100h-640Zm706.66 0v-102.67q0-56.66-29.5-97.16t-79.16-66.84q63 7.34 118.66 22.5 55.67 15.17 94 35.5 34 19.34 53 46.17 19 26.83 19 59.83V-160h-176ZM358.67-480.67q-66 0-109.67-43.66Q205.33-568 205.33-634T249-743.67q43.67-43.66 109.67-43.66t109.66 43.66Q512-700 512-634t-43.67 109.67q-43.66 43.66-109.66 43.66ZM732-634q0 66-43.67 109.67-43.66 43.66-109.66 43.66-11 0-25.67-1.83-14.67-1.83-25.67-5.5 25-27.33 38.17-64.67Q578.67-590 578.67-634t-13.17-80q-13.17-36-38.17-66 12-3.67 25.67-5.5 13.67-1.83 25.67-1.83 66 0 109.66 43.66Q732-700 732-634ZM105.33-226.67H612V-260q0-14.33-8.17-27.33-8.16-13-20.5-18.67-66-30.33-117-42.17-51-11.83-107.66-11.83-56.67 0-108 11.83-51.34 11.84-117.34 42.17-12.33 5.67-20.16 18.67-7.84 13-7.84 27.33v33.33Zm253.34-320.66q37 0 61.83-24.84Q445.33-597 445.33-634t-24.83-61.83q-24.83-24.84-61.83-24.84t-61.84 24.84Q272-671 272-634t24.83 61.83q24.84 24.84 61.84 24.84Zm0 320.66Zm0-407.33Z"/></svg>
                      <div className='font-medium text-lg top-0 px-1 left-0 text-black rounded-tr-lg whitespace-nowrap'>Max Team Size :  {detail.MaxSize}
                    {/* <h1 className='text-sm font-normal whitespace-nowrap'>{detail.Teamsize} </h1> */}
                      </div>
                </div>
                <div className=' flex m-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000"><path d="M687.33-80q-79.95 0-136.31-56.35-56.35-56.36-56.35-136.32 0-79.95 56.35-136.31 56.36-56.35 136.31-56.35 79.96 0 136.32 56.35Q880-352.62 880-272.67q0 79.96-56.35 136.32Q767.29-80 687.33-80Zm61.17-93.67 27.83-28-75-75v-112H662V-262l86.5 88.33ZM186.67-120q-27.5 0-47.09-19.58Q120-159.17 120-186.67v-586.66q0-28.34 19.17-47.5Q158.33-840 186.67-840H377q8.33-35 37.33-57.5T480-920q37.33 0 66.17 22.5Q575-875 583.33-840h190q28.34 0 47.5 19.17Q840-801.67 840-773.33v288.66q-16-10.33-32.34-17.65-16.35-7.32-34.33-13.01v-258h-66.66v100H253.33v-100h-66.66v586.66H444q5.67 17.34 13.33 33.67Q465-136.67 476-120H186.67ZM480-773.33q17 0 28.5-11.5t11.5-28.5q0-17-11.5-28.5t-28.5-11.5q-17 0-28.5 11.5t-11.5 28.5q0 17 11.5 28.5t28.5 11.5Z"/></svg>
                    <div className='font-medium text-lg px-1 top-0 left-0 text-black rounded-tr-lg whitespace-nowrap '>DeadLine
                      {/* <h1 className='text-sm font-normal whitespace-nowrap'>{detail.DeadLine} </h1> */}
                    </div>
                </div>
              </div>
          </div>
        
    </div>

    {/* detail of event */}
    <div className=' box-content bg-blue-50 p-6 rounded-lg shadow-lg h-96 w-auto m-5'>
          <p className="text-2xl font-bold  mb-10">Event Description </p>        
          {detail.description}
    </div>
         </div>
      
      </>
        
  )
}

export default EventsDetailpage