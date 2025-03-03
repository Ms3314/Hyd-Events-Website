import { useEffect } from 'react';
import {useState} from 'react'
import axios from "axios"
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../firebase/config';
import { v4 } from 'uuid';
import toast, { Toaster } from 'react-hot-toast';

const Settingpg = () => {
      const [banner , setBannerUpload] = useState("");
      const [logo , setLogoUpload] = useState("");
      const [currentSetting, setCurrentSetting] = useState({
        name: '',
        college: '',
        email: '',
        about:'',
        orgBanner: '',
        orgPic : '',
      });

      useEffect(()=>{
        const setting = localStorage.getItem("setting" )
        const settingTime = localStorage.getItem("settingTime")
        const tenmin = 10*60*1000;
        console.log(setting )
        console.log(JSON.parse(settingTime) - Date.now() < tenmin)
        if (JSON.parse(setting) && (Date.now() - JSON.parse(settingTime) < tenmin ))
        {
          setCurrentSetting(JSON.parse(setting))

        }else {
          console.log("I am being called")
          async function  getTheOrgDetail() {
            const response = await axios.get(`http://localhost:3000/api/v1/admin/org` ,  {
            headers : {
              "Authorization" : `Bearer ${localStorage.getItem("token")}`,
              "Content-Type" : "application/json",
            }
            })
            console.log(response.data.org)
            setCurrentSetting(response.data.org)
          }
          getTheOrgDetail();
        }
      },[])

      const handleSubmitSetting = async (e) => {
        e.preventDefault();
        if (logo) {
          console.log("the logo exist" . logo)
          const event_logoref = ref(storage , `event_images/${logo.name + v4() }`)
          await uploadBytes(event_logoref , logo).then( (res)=>{
              getDownloadURL(res.ref).then(async (ans)=>{
              console.log("this is the answer" , ans)
              currentSetting.logo = ans ;
              console.log("so the event image has been set ig" , currentSetting.logo)
              // await finalSubmit();
            });
        })
        }
        if (banner) {
          console.log("the logo exist" . logo)
          const event_bannerref = ref(storage , `event_images/${banner.name + v4() }`)
          await uploadBytes(event_bannerref , banner).then( (res)=>{
              getDownloadURL(res.ref).then(async (ans)=>{
              console.log("this is the answer" , ans)
              currentSetting.banner = ans ;
              console.log("so the event image has been set ig" , currentSetting.logo)
              // await finalSubmit();
            });
        })
        }
        const response = await axios.put(`http://localhost:3000/api/v1/admin/org` , currentSetting , {
          headers : {
            "Authorization" : `Bearer ${localStorage.getItem("token")}`,
            "Content-Type" : "application/json",
        }
        })
        
        if (response.status == 200) {
          toast.success("Setting has been updated successfully")
          localStorage.setItem("setting" ,JSON.stringify(currentSetting) )
          localStorage.setItem("settingTime" , JSON.stringify(Date.now()))   
          localStorage.removeItem("token") 
        }    
        
        setCurrentSetting({ 
        name: '',
        college: '',
        email: '',
        about:'',
        orgBanner: '',
        orgPic:"",
        });
      };
      return (
        <div className="flex min-h-screen bg-gray-100">
          {/* Sidebar */}
          <div className="w-64 bg-white shadow-md p-6 hidden md:block">
            <h2 className="text-xl font-bold mb-6">Settings</h2>
            <ul className="space-y-4">
              <li className="text-gray-700 font-medium hover:text-black cursor-pointer">General</li>
              <li className="text-gray-700 font-medium hover:text-black cursor-pointer">Account</li>
              <li className="text-gray-700 font-medium hover:text-black cursor-pointer">Security</li>
              <li className="text-gray-700 font-medium hover:text-black cursor-pointer">Billing</li>
            </ul>
          </div>
    
          {/* Main Content */}
          <div className="flex-1 p-8">
            <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Organization Settings</h2>
              <form onSubmit={handleSubmitSetting} className="space-y-6">
                {/* Organization Name */}
                <div>
                  <label className="block text-gray-600 font-medium">Name of Organization</label>
                  <input
                    type="text"
                    placeholder="Enter name"
                    value={currentSetting.name}
                    onChange={(e) => setCurrentSetting((prev) => ({ ...prev, name: e.target.value }))}
                    className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
    
                {/* Affiliation */}
                <div>
                  <label className="block text-gray-600 font-medium">Affiliation</label>
                  <input
                    type="text"
                    placeholder="Enter college affiliation"
                    value={currentSetting.college}
                    onChange={(e) => setCurrentSetting((prev) => ({ ...prev, college: e.target.value }))}
                    className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
    
                {/* Email */}
                <div>
                  <label className="block text-gray-600 font-medium">Email</label>
                  <input
                    type="email"
                    placeholder="Enter email"
                    value={currentSetting.email}
                    onChange={(e) => setCurrentSetting((prev) => ({ ...prev, email: e.target.value }))}
                    className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
    
                {/* Description */}
                <div>
                  <label className="block text-gray-600 font-medium">About Organization</label>
                  <textarea
                    placeholder="Describe the organization..."
                    value={currentSetting.about}
                    onChange={(e) => setCurrentSetting((prev) => ({ ...prev, about: e.target.value }))}
                    className="w-full max-h-[400px] border border-gray-300 rounded-lg p-3 mt-1 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
    
                {/* Uploads */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-600 font-medium">Upload Logo</label>
                    <input type="file" className="w-full border border-gray-300 rounded-lg p-2" onChange={(e) => setLogoUpload(e.target.files[0])} />
                  </div>
                  <div>
                    <label className="block text-gray-600 font-medium">Upload Banner</label>
                    <input type="file" className="w-full border border-gray-300 rounded-lg p-2" onChange={(e) => setBannerUpload(e.target.files[0])} />
                  </div>
                </div>
    
                {/* Submit Button */}
                <div className="flex justify-end">
                  <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }
      


export default Settingpg
