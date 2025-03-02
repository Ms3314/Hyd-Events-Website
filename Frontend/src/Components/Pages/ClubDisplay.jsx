import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ClubDisplay() {
    const [orgs , setOrgs] = useState()
    useEffect(()=>{
        async function getAllOrgs () {
            const organizations = await axios.get("http://localhost:3000/api/v1/user/org")
            setOrgs(organizations.data.Allorgs);
        }   
        getAllOrgs();
    },[])
  return (
    <div className='flex flex-col pt-2 mt-2 pl-6 gap-2'>
        <p className='flex text-black text-2xl font-bold uppercase '>Trending Clubs </p>
        <div className="flex flex-row gap-5">
        {orgs?.slice(0,7).map((item, index) => (
            <div key={item.id || index} className={`${index >= 4 ? "hidden md:flex" : "flex"}`}>
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
    return (
        <div className='rounded-lg w-20 h-20'>
            <img src={data.orgPic} className='rounded-2xl bg-red-200 w-full h-full' alt={data.name} onClick={handleOrgDisplay}/>
        </div>
    )
}

export default ClubDisplay
