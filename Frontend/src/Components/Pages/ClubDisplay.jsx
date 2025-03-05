import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ClubDisplay() {
    const [orgs , setOrgs] = useState()
    useEffect(()=>{
        async function getAllOrgs () {
            const organizations = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/v1/user/org`)
            setOrgs(organizations.data.Allorgs);
        }   
        getAllOrgs();
    },[])
  return (
    <div className='flex flex-col pt-2 mt-2 pl-6 gap-2'>
        <p className='flex text-black text-2xl font-bold uppercase '>Trending Clubs </p>
        <div className="flex flex-row gap-5">
        {orgs?.slice(0,7).map((item, index) => (
            <div key={item.id || index} className={`${index >= 4 ? "hidden  md:flex" : "flex"}`}>
            <SmallCard data={item} />
            </div>
        ))}
        </div>
    </div>
  )
}

function SmallCard({data}) {
    const navigate = useNavigate();

    const handleOrgDisplay = () => {
        navigate(`/societydetails/${data.id}`)
    }
    if(!data.orgPic) {
        const len = data.name.length
        return (
            <div className='cursor-pointer rounded-lg w-20 h-20 '>
                <p
                className={` border-2 rounded-2xl bg-red-100 font-semibold flex  flex-col ${len >= 5 ? "text-sm" : ""} 
                items-center justify-center w-full h-full overflow-hidden break-words text-center p-1`}
                onClick={handleOrgDisplay}
                >
                {data.name} 
                </p>
            </div>
        )
    }
    return (
        <div className='cursor-pointer rounded-lg w-20 h-20'>
            <img src={data.orgPic} className='rounded-2xl bg-red-200 w-full h-full' alt={data.name} onClick={handleOrgDisplay}/>
        </div>
    )
}

export default ClubDisplay
