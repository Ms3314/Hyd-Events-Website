import React, { useEffect,useState } from 'react'
import Cards from '../Cards/Cards'
import Button from '../Cards/Button'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import NotFound from '../Pages/404'
import ServerError from '../Pages/500'

// const SocietyPg = () => {
//   const [notFound , isNotFound] = useState(false);
//   const [serverError , isServerError] = useState(false);
//   const [isLoading , setLoading] = useState(false);
//   const [data , setData] = useState();
//   const {orgid} = useParams();
//   console.log(data , "This is the data")
//   const detail = data
//   useEffect(()=>{
//     console.log(orgid ,"this is the id")    
//     const FindEventdatas = async () => {
//       setLoading(true)
//       const org = await axios.get(`http://localhost:3000/api/v1/user/org/${orgid}`)
//       console.log(org , "these are the thing")
//       // console.log( "these are the orgs" , events.data.events)
//       if(org.status == 200) {
//         setData(org.data.orgdata)
//         console.log(org.data.orgdata , "this is the data")
//         setLoading(false)
//       }
//       if (org.status == 404) {
//         setLoading(false)
//         isNotFound(true);
//       }
//       if (org.status == 500) {
//         setLoading(false ) ;
//         isServerError(true)
//       }
//     } 
//     FindEventdatas();
//   },[])

//   if(serverError) {
//     return (
//       <ServerError/>
//     )
//   }

//   if (notFound) {
//     return (
//       <NotFound/>
//     )
//   }
//   if (isLoading) {
//     return (
//       <p>Loading.....</p>
//     )
//   }
//   return (
//     <div>
//        <div className='grid lg:grid-cols-3 grid-cols-1 flex'>
//           <div className='col-span-2 box-content bg-blue-50 p-4 rounded-lg shadow-lg h-80 m-5'>

//             <div className='relative w-32 h-48 border-1 shadow-2xl m-2 rounded-2xl inline-flex'>
//               {/* <img src={detail.orgPic} alt={detail.name}/> */}
//               <div className='font-bold sm:text-xl lg:text-3xl m-4 top-0 left-0 text-black p-6 rounded-tr-lg whitespace-nowrap'>{detail?.ClubName}
//               <h3 className='lg:text-xl sm:text-lg whitespace-nowrap'>Lorem ipsum dolor sit amet consectetur 
//               </h3>
//               </div>
//             </div>
//           <div className='flex inline text-lg'>
//            <svg  className='p-1' xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000"><path d="M480-80q-106 0-173-33.5T240-200q0-24 14.5-44.5T295-280l63 59q-9 4-19.5 9T322-200q13 16 60 28t98 12q51 0 98.5-12t60.5-28q-7-8-18-13t-21-9l62-60q28 16 43 36.5t15 45.5q0 53-67 86.5T480-80Zm1-220q99-73 149-146.5T680-594q0-102-65-154t-135-52q-70 0-135 52t-65 154q0 67 49 139.5T481-300Zm-1 100Q339-304 269.5-402T200-594q0-71 25.5-124.5T291-808q40-36 90-54t99-18q49 0 99 18t90 54q40 36 65.5 89.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520Zm0-80Z"/></svg>
//            {detail?.college}
//              </div>
//            <div className='flex inline text-lg'>
//            <svg className='p-1' xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"/></svg>
//            {/* {detail.offSite} */}
//           </div>
//           {/* <div className='flex inline p-1 text-lg'>
//           <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M838-74.33 713.33-199v98.33h-66.66v-212.66h212.66v66.66H760L884.67-122 838-74.33ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-126.57Q80-396.15 80-478.67q0-83.32 31.5-156.61Q143-708.57 197-762.79 251-817 324-848.5 397-880 480-880t156 31.5q73 31.5 127 85.71 54 54.22 85.5 127.51T880-478.67q0 22-2 43t-6.67 42.34H802q5.67-21.11 8.5-42.23 2.83-21.11 2.83-42.97 0-21.87-2.79-43.74-2.8-21.86-8.39-43.73H650q2.33 22 4.17 43.67Q656-500.67 656-479q0 21.67-1.33 43-1.34 21.33-4 42.67h-67.34q3-21.34 4.5-42.67 1.5-21.33 1.5-42.67 0-21.83-1.5-43.66-1.5-21.84-4.5-43.67H377.62q-3.29 22-4.79 43.67-1.5 21.66-1.5 43.33 0 21.67 1.5 43t4.5 42.67h176v66.66H390.67q13.33 49.67 33 96.84 19.66 47.16 56.33 82.5 22 0 43.33-2.5 21.34-2.5 43.34-6.5V-89q-22 4-43.34 6.5Q502-80 480-80ZM157.85-393.33H310q-2.67-21.34-4-42.67-1.33-21.33-1.33-42.67 0-21.83 1.16-43.66 1.17-21.84 3.5-43.67H157.81q-5.57 21.87-8.36 43.73-2.78 21.87-2.78 43.74 0 21.86 2.79 42.97 2.8 21.12 8.39 42.23Zm24.82-239.34h139.06q10.6-44.33 26.77-86.5 16.17-42.16 40.17-81.5-65.67 22-119.34 64.5-53.66 42.5-86.66 103.5ZM388-160q-23.33-38.67-39.5-80.5t-25.83-86.17h-140q31.66 61.67 85 105.17Q321-178 388-160Zm2.67-472.67H570Q557.33-683 535.67-729.5 514-776 480-814q-34 38.67-55.67 84.83-21.66 46.17-33.66 96.5Zm248.22 0h138.44q-33-61-86.33-103.83T572-800q24 38.67 40.17 80.83 16.16 42.17 26.72 86.5Z"/></svg>

//           </div> */}
//           </div>
//           <div className='bg-blue-50 box-content text-black p-4 rounded-lg shadow-lg h-80 m-5'>
//             <div className='font-bold text-2xl justify-center items-center text-primary p-4'>
//               If "Keen to work alongside-Register"
//             </div>
//             <div className='flex justify-center item-center'>
//               <button className="flex w-64 px-4 py-2 mb-3 bg-blue-600 text-2xl item-center justify-center text-white rounded-lg text-xl 
//                         hover:bg-blue-700 transition duration-200" onClick={() => handleClick('')}>Register
//               </button>
//             </div>
            
//             <div className='inline-flex m-1'>
//             <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#000000"><path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z"/></svg>
//             {/* <div className='text-xl font-semibold'> */}
//             <div className='font-medium text-lg top-0 px-1 left-0 text-black rounded-tr-lg whitespace-nowrap'>Members
//               <h1 className='text-sm font-normal whitespace-nowrap'>{detail?.NoofMem} </h1>
//               </div>
//             </div>
//             <div className='inline flex m-1'>
//             <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28px" height="28px" viewBox="0 0 30 30">
//     <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
// </svg>
              
//            <div className='font-medium text-lg top-0 px-1 left-0 text-black rounded-tr-lg whitespace-nowrap'>
//              linkdn
//             {/* <h1 className='text-sm font-normal whitespace-nowrap'>{detail.ClubLdn} </h1> */}
//               </div>
//             </div>
//             <div className='inline flex m-1 mt-4 '>
//             <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 50 50">
//     <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
// </svg>
//              <div className='font-medium text-lg px-1 top-0 left-0 text-black rounded-tr-lg whitespace-nowrap'>instagram
//               {/* <h1 className='text-sm font-normal whitespace-nowrap'>{detail.ClubIG} </h1> */}
//               </div>
//             </div>
//             </div>
        
//         </div>
//     {/* cards */}
  
//     {/* about description */}
//     <div className='box-content text-black p-6 rounded-lg shadow-lg h-96 bg-blue-50 w-auto m-5'>
//           {detail?.about}
//     </div>
//     </div>
    
//   )
// }

const SocietyPg = () => {
  const [notFound, setNotFound] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState();
  const { orgid } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrganizationData = async () => {
      setLoading(true);
      try {
        const org = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/v1/user/org/${orgid}`);
        
        if (org.status === 200) {
          setData(org.data.orgdata);
          setLoading(false);
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setLoading(false);
          setNotFound(true);
        } else {
          setLoading(false);
          setServerError(true);
        }
      }
    };
    
    fetchOrganizationData();
  }, [orgid]);

 

  if (serverError) {
    return <ServerError />;
  }

  if (notFound) {
    return <NotFound />;
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Club Banner Section */}
      <div className="w-full bg-blue-50 rounded-lg shadow-lg mb-8 overflow-hidden">
        <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500 relative">
          {data?.orgBanner ? (
            <img 
              src={data.orgBanner} 
              alt={`${data?.name} banner`} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-white text-2xl font-bold">Club Banner</span>
            </div>
          )}
        </div>
      </div>

      {/* Main Content Section */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Column - Club Info */}
        <div className="lg:col-span-2">
          <div className="bg-blue-50 rounded-lg shadow-lg p-6 mb-6">
            <div className="flex items-start mb-6">
              {/* Club Logo */}
              <div className="w-32 h-32 bg-white rounded-lg shadow-lg mr-6 overflow-hidden flex items-center justify-center">
                {data?.orgPic ? (
                  <img 
                    src={data.orgPic} 
                    alt={`${data?.name} logo`} 
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )}
              </div>
              
              {/* Club Name and Basic Info */}
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{data?.name}</h1>
                <div className="flex items-center text-gray-600 mb-2">
                  <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                    <path d="M480-80q-106 0-173-33.5T240-200q0-24 14.5-44.5T295-280l63 59q-9 4-19.5 9T322-200q13 16 60 28t98 12q51 0 98.5-12t60.5-28q-7-8-18-13t-21-9l62-60q28 16 43 36.5t15 45.5q0 53-67 86.5T480-80Zm1-220q99-73 149-146.5T680-594q0-102-65-154t-135-52q-70 0-135 52t-65 154q0 67 49 139.5T481-300Zm-1 100Q339-304 269.5-402T200-594q0-71 25.5-124.5T291-808q40-36 90-54t99-18q49 0 99 18t90 54q40 36 65.5 89.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520Zm0-80Z"/>
                  </svg>
                  {data?.college || "No college specified"}
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  {data?.email || "No email specified"}
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                    <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"/>
                  </svg>
                  Events: {data?.events?.length || 0}
                </div>
              </div>
            </div>
            
            {/* Club Description */}
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Club Description</h2>
              <p className="text-gray-700">
                {data?.about || "No description available."}
              </p>
            </div>
          </div>
        </div>
        
        {/* Right Column - Registration and Social Media */}
        <div>
          <div className="bg-blue-50 rounded-lg shadow-lg p-6 mb-6">
            
            
            <div className="border-t pt-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Connect with us</h3>
              
              <div className="flex items-center mb-3">
                <svg className="w-6 h-6 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                  <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                </svg>
                <div className="text-gray-700">
                  <span className="font-medium">LinkedIn</span>
                  {data?.Socials?.linkedin && <p className="text-sm">{data.Socials.linkedin}</p>}
                </div>
              </div>
              
              <div className="flex items-center mb-3">
                <svg className="w-6 h-6 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                  <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
                </svg>
                <div className="text-gray-700">
                  <span className="font-medium">Instagram</span>
                  {data?.Socials?.instagram && <p className="text-sm">{data.Socials.instagram}</p>}
                </div>
              </div>
              
              <div className="flex items-center">
                <svg className="w-6 h-6 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
                <div className="text-gray-700">
                  <span className="font-medium">Twitter</span>
                  {data?.Socials?.twitter && <p className="text-sm">{data.Socials.twitter}</p>}
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-3">
              <svg className="w-6 h-6 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="30" height="30" fill="currentColor">
                <path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Z"/>
              </svg>
              <div className="text-gray-700">
                <span className="font-medium">Members</span>
                <p className="text-sm">
                  {data?.memberSize === 0 ? "Not specified" : 
                   data?.memberSize === 1 ? "10-20 members" :
                   data?.memberSize === 2 ? "20-50 members" :
                   data?.memberSize === 3 ? "50-100 members" :
                   data?.memberSize === 4 ? "100+ members" : "Not specified"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Events Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Club Events</h2>
        
        {data?.events && data.events.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.events.map((event, index) => (
              <CardComponent 
                key={event.id || index}
                item={event}
                setEventData={() => {}}
                setLoading={setLoading}
              />
            ))}
          </div>
        ) : (
          <div className="bg-blue-50 p-8 rounded-lg text-center">
            <p className="text-gray-700 text-lg">No events available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
};

// This component should be imported and used in your component
// Placeholder for CardComponent if it needs to be included in the file
const CardComponent = ({item, setEventData, setLoading}) => {
  const navigate = useNavigate();
  
  function EditEventPage(item) {
    navigate("/editevent");
  }
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col
                hover:border-2 border-r-secondary border-t-primary border-l-secondary border-b-secondary">
      <div className="h-64 relative">
        <img src={item.event_image} alt={item.title} className="w-full h-full object-contain" />
        <div className="h-5 w-32 bg-primary flex items-center justify-center absolute bottom-0 text-white rounded-sm">
          {item.EventType}
        </div>
      </div>
      <div className="p-4">
        <div className="flex flex-col">
          <div className="flex text-sm flex-inline font-semibold text-gray-700 uppercase lg:gap-6 md:gap-4 gap-4">
            {item.month} <span className='text-primary text-lg-center'>{item.Date}</span>||
            <div className="text-sm text-gray-600">{item.time}</div>||
            <div className="text-sm text-red-600">Going On</div>
          </div>
          <div className="text-lg text-gray-600 uppercase font-bold m-1">{item.title}</div>
          <div className="text-sm text-gray-600 m-1">{item.venue}</div>
        </div>
        {/* Assuming AlertComponent is imported elsewhere */}
        {/* <AlertComponent setLoading={setLoading} eventdata={item} setEventData={setEventData}/> */}
        
      </div>
    </div>
  );
};

export default SocietyPg;


