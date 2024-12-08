import React from 'react';
import img1 from '../../assets/img1.png'
import pic2 from '../../assets/pic2.png'
import { useParams } from 'react-router-dom';

const EventsDetailpage = () => {
  // // const item = Details.find(item => item.id === parseInt(id));
  // const { eventId } = useParams();

  // // Make sure 'events' is an array and exists
  // const detail = Details?.find(detail => detail.id === eventId);
  const Details =[
    {
        id:11,
        imgSrc:img1,
        month:'oct',
        Date:'23',
        EventName:'Dev Expedation',
        Venue:'Muffakham jah college of engineering and technology',
        Timings:'1:00-2:00',
        fee:'Free',
        Banner:'https://tse2.mm.bing.net/th?id=OIP.0M2UfAjrF3u49iD-xVE0zAHaEK&pid=Api&P=0&h=180',
        EventType:'hackathon',
        club:'csi',
        NoOfReg:'490',
        DeadLine:'4-jan-2023',
        Teamsize:'Individual',
        description:'lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iusto mollitia voluptas at quibusdam ratione veritatis asperiores maiores libero ducimus voluptatum, eligendi quos dicta eum, ab non quis ad? Omnis'
        

    },
    {
        id:21,
        imgSrc:pic2,
        month:'oct',
        Date:'23',
        EventName:'Dev Expedation',
        Venue:'Hyderabad',
        Timings:'1:00-2:00',
        fee:49,
        GLink:'/',
         EventType:'hackathon',
        NoOfReg:'490',
        Teamsize:'Individual',
        DeadLine:'4-jan-2023',
         club:'csi',
        description:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iusto mollitia voluptas at quibusdam ratione veritatis asperiores maiores libero ducimus voluptatum, eligendi quos dicta eum, ab non quis ad? Omnis'
        

    },
    {
        id:31,
        imgSrc:img1,
        month:'oct',
        Date:'23',
        EventName:'Dev Expedation',
        Venue:'Hyderabad',
        Timings:'1:00-2:00',
        fee:49,
        GLink:'/',
        NoOfReg:'490',
        EventType:'hackathon',
        DeadLine:'4-jan-2023',
        Teamsize:'Individual',
         club:'csi',
        description:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iusto mollitia voluptas at quibusdam ratione veritatis asperiores maiores libero ducimus voluptatum, eligendi quos dicta eum, ab non quis ad? Omnis'
        

    },
    {
        id:41,
        imgSrc:pic2,
        month:'oct',
        Date:'23',
        EventName:'Dev Expedation',
        Venue:'Hyderabad',
        Timings:'1:00-2:00',
        fee:49,
        GLink:'/',
        NoOfReg:'490',
        EventType:'hackathon',
        DeadLine:'4-jan-2023',
        Teamsize:'Individual',
         club:'csi',
        description:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iusto mollitia voluptas at quibusdam ratione veritatis asperiores maiores libero ducimus voluptatum, eligendi quos dicta eum, ab non quis ad? Omnis'
        

    },
    {
        id:51,
        imgSrc:img1,
        month:'oct',
        Date:'23',
        EventName:'Dev Expedation',
        Venue:'Hyderabad',
        Timings:'1:00-2:00',
        fee:49,
        GLink:'/',
        NoOfReg:'490',
        EventType:'hackathon',
         club:'csi',
         DeadLine:'4-jan-2023',
         Teamsize:'Individual',
        description:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iusto mollitia voluptas at quibusdam ratione veritatis asperiores maiores libero ducimus voluptatum, eligendi quos dicta eum, ab non quis ad? Omnis'
        

    },
    {
        id:61,
        imgSrc:pic2,
        month:'oct',
        Date:'23',
        EventName:'Dev Expedation',
        Venue:'Hyderabad',
        Timings:'1:00-2:00',
        fee:49,
        GLink:'/',
        NoOfReg:'490',
        EventType:'hackathon',
         club:'csi',
        Teamsize:'Individual',
        DeadLine:'4-jan-2023',

        description:' lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iusto mollitia voluptas at quibusdam ratione veritatis asperiores maiores libero ducimus voluptatum, eligendi quos dicta eum, ab non quis ad? Omnis'
        

    },
]
  return (
    <>
    {Details.map((detail) => (
    <div>  
    <div className='flex flex-col sm:flex-row box-content rounded-lg text-white-50 shadow-lg bg-black m-5'>
        <div className='container flex h-full w-full sm:w-1/3 mb-40'>
        banner holder
        <img src=''/>
        </div>
    </div>
        {/* details  */}
        <div className='grid lg:grid-cols-3 grid-cols-1 flex'>
          <div className='col-span-2 box-content bg-blue-50 p-4 rounded-lg shadow-lg h-80 m-5'>

            <div className='relative w-32 h-48 border-1 shadow-2xl m-2 rounded-2xl inline-flex'>
              <img src={detail.imgSrc} alt={detail.EventName}/>
              <h2 className='font-bold sm:text-xl lg:text-3xl m-4 top-0 left-0 text-black p-6 rounded-tr-lg whitespace-nowrap'>{detail.EventName}
              <h3 className='lg:text-xl sm:text-lg whitespace-nowrap'>{detail.EventType} by {detail.club} </h3>
              </h2>
            </div>
          <div className='flex inline text-lg'>
           <svg  className='p-1' xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000"><path d="M480-80q-106 0-173-33.5T240-200q0-24 14.5-44.5T295-280l63 59q-9 4-19.5 9T322-200q13 16 60 28t98 12q51 0 98.5-12t60.5-28q-7-8-18-13t-21-9l62-60q28 16 43 36.5t15 45.5q0 53-67 86.5T480-80Zm1-220q99-73 149-146.5T680-594q0-102-65-154t-135-52q-70 0-135 52t-65 154q0 67 49 139.5T481-300Zm-1 100Q339-304 269.5-402T200-594q0-71 25.5-124.5T291-808q40-36 90-54t99-18q49 0 99 18t90 54q40 36 65.5 89.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520Zm0-80Z"/></svg>
           {detail.Venue}
             </div>
           <div className='flex inline text-lg'>
           <svg className='p-1' xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"/></svg>
           {detail.Date} , {detail.month}
          </div>
          {/* <div className='flex inline p-1 text-lg'>
          <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M838-74.33 713.33-199v98.33h-66.66v-212.66h212.66v66.66H760L884.67-122 838-74.33ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-126.57Q80-396.15 80-478.67q0-83.32 31.5-156.61Q143-708.57 197-762.79 251-817 324-848.5 397-880 480-880t156 31.5q73 31.5 127 85.71 54 54.22 85.5 127.51T880-478.67q0 22-2 43t-6.67 42.34H802q5.67-21.11 8.5-42.23 2.83-21.11 2.83-42.97 0-21.87-2.79-43.74-2.8-21.86-8.39-43.73H650q2.33 22 4.17 43.67Q656-500.67 656-479q0 21.67-1.33 43-1.34 21.33-4 42.67h-67.34q3-21.34 4.5-42.67 1.5-21.33 1.5-42.67 0-21.83-1.5-43.66-1.5-21.84-4.5-43.67H377.62q-3.29 22-4.79 43.67-1.5 21.66-1.5 43.33 0 21.67 1.5 43t4.5 42.67h176v66.66H390.67q13.33 49.67 33 96.84 19.66 47.16 56.33 82.5 22 0 43.33-2.5 21.34-2.5 43.34-6.5V-89q-22 4-43.34 6.5Q502-80 480-80ZM157.85-393.33H310q-2.67-21.34-4-42.67-1.33-21.33-1.33-42.67 0-21.83 1.16-43.66 1.17-21.84 3.5-43.67H157.81q-5.57 21.87-8.36 43.73-2.78 21.87-2.78 43.74 0 21.86 2.79 42.97 2.8 21.12 8.39 42.23Zm24.82-239.34h139.06q10.6-44.33 26.77-86.5 16.17-42.16 40.17-81.5-65.67 22-119.34 64.5-53.66 42.5-86.66 103.5ZM388-160q-23.33-38.67-39.5-80.5t-25.83-86.17h-140q31.66 61.67 85 105.17Q321-178 388-160Zm2.67-472.67H570Q557.33-683 535.67-729.5 514-776 480-814q-34 38.67-55.67 84.83-21.66 46.17-33.66 96.5Zm248.22 0h138.44q-33-61-86.33-103.83T572-800q24 38.67 40.17 80.83 16.16 42.17 26.72 86.5Z"/></svg>

          </div> */}
          </div>
          <div className='bg-blue-50 box-content text-black p-4 rounded-lg shadow-lg h-80 m-5'>
            <div className='font-bold text-2xl justify-center items-center p-4'>
              {detail.fee}
            </div>
            <div className='flex justify-center item-center'>
              <button className="flex w-64 px-4 py-2 mb-3 bg-blue-600 text-2xl item-center justify-center text-white rounded-lg text-xl 
                        hover:bg-blue-700 transition duration-200" onClick={() => handleClick('')}>Register
              </button>
            </div>
            
            <div className='inline-flex'>
            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z"/></svg>
            {/* <div className='text-xl font-semibold'> */}
            <h2 className='font-medium text-xl top-0 p-1 left-0 text-black rounded-tr-lg whitespace-nowrap'>Registered
              <h1 className='text-sm font-normal whitespace-nowrap'>{detail.NoOfReg} </h1>
              </h2>
            </div>
            <div className='inline flex'>
            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M38.67-160v-100q0-34.67 17.83-63.17T105.33-366q69.34-31.67 129.67-46.17 60.33-14.5 123.67-14.5 63.33 0 123.33 14.5T611.33-366q31 14.33 49.17 42.83T678.67-260v100h-640Zm706.66 0v-102.67q0-56.66-29.5-97.16t-79.16-66.84q63 7.34 118.66 22.5 55.67 15.17 94 35.5 34 19.34 53 46.17 19 26.83 19 59.83V-160h-176ZM358.67-480.67q-66 0-109.67-43.66Q205.33-568 205.33-634T249-743.67q43.67-43.66 109.67-43.66t109.66 43.66Q512-700 512-634t-43.67 109.67q-43.66 43.66-109.66 43.66ZM732-634q0 66-43.67 109.67-43.66 43.66-109.66 43.66-11 0-25.67-1.83-14.67-1.83-25.67-5.5 25-27.33 38.17-64.67Q578.67-590 578.67-634t-13.17-80q-13.17-36-38.17-66 12-3.67 25.67-5.5 13.67-1.83 25.67-1.83 66 0 109.66 43.66Q732-700 732-634ZM105.33-226.67H612V-260q0-14.33-8.17-27.33-8.16-13-20.5-18.67-66-30.33-117-42.17-51-11.83-107.66-11.83-56.67 0-108 11.83-51.34 11.84-117.34 42.17-12.33 5.67-20.16 18.67-7.84 13-7.84 27.33v33.33Zm253.34-320.66q37 0 61.83-24.84Q445.33-597 445.33-634t-24.83-61.83q-24.83-24.84-61.83-24.84t-61.84 24.84Q272-671 272-634t24.83 61.83q24.84 24.84 61.84 24.84Zm0 320.66Zm0-407.33Z"/></svg>
            <h2 className='font-semibold text-xl top-0 p-1 left-0 text-black rounded-tr-lg whitespace-nowrap'>Team Size
              <h1 className='text-sm font-normal whitespace-nowrap'>{detail.Teamsize} </h1>
              </h2>
            </div>
            <div className='inline flex'>
          
            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M687.33-80q-79.95 0-136.31-56.35-56.35-56.36-56.35-136.32 0-79.95 56.35-136.31 56.36-56.35 136.31-56.35 79.96 0 136.32 56.35Q880-352.62 880-272.67q0 79.96-56.35 136.32Q767.29-80 687.33-80Zm61.17-93.67 27.83-28-75-75v-112H662V-262l86.5 88.33ZM186.67-120q-27.5 0-47.09-19.58Q120-159.17 120-186.67v-586.66q0-28.34 19.17-47.5Q158.33-840 186.67-840H377q8.33-35 37.33-57.5T480-920q37.33 0 66.17 22.5Q575-875 583.33-840h190q28.34 0 47.5 19.17Q840-801.67 840-773.33v288.66q-16-10.33-32.34-17.65-16.35-7.32-34.33-13.01v-258h-66.66v100H253.33v-100h-66.66v586.66H444q5.67 17.34 13.33 33.67Q465-136.67 476-120H186.67ZM480-773.33q17 0 28.5-11.5t11.5-28.5q0-17-11.5-28.5t-28.5-11.5q-17 0-28.5 11.5t-11.5 28.5q0 17 11.5 28.5t28.5 11.5Z"/></svg>
            <h2 className='font-medium text-xl p-1 top-0 left-0 text-black rounded-tr-lg whitespace-nowrap'>DeadLine
              <h1 className='text-sm font-normal whitespace-nowrap'>{detail.DeadLine} </h1>
              </h2>
            </div>
            </div>
        
        </div>
        <div className='bg-blue-500 box-content text-white p-6 rounded-lg shadow-lg h-96 w-auto m-5'>
          {detail.description}
        </div>
         </div>
      ))}
      </>
        
  )
}

export default EventsDetailpage