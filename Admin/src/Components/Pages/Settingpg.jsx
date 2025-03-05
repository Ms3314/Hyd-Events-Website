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
        memberSize: 0,
      });

      useEffect(()=>{
          // console.log("I am being called")
          async function  getTheOrgDetail() {
            const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/v1/admin/org` ,  {
            headers : {
              "Authorization" : `Bearer ${localStorage.getItem("token")}`,
              "Content-Type" : "application/json",
            }
            })
            // console.log(response.data.org)
            setCurrentSetting(response.data.org)
          }
          getTheOrgDetail();
        
      },[])

      const handleSubmitSetting = async (e) => {
        e.preventDefault();
        
        let updatedSetting = { ...currentSetting };
        
        // Upload Logo First
        if (logo) {
          // console.log("Uploading logo:", logo.name);
          const event_logoref = ref(storage, `event_images/${logo.name + v4()}`);
          const logoSnapshot = await uploadBytes(event_logoref, logo);
          const logoUrl = await getDownloadURL(logoSnapshot.ref);
          
          // console.log("Logo uploaded successfully. URL:", logoUrl);
          updatedSetting.orgPic = logoUrl;
        }
      
        // Upload Banner Next
        if (banner) {
          // console.log("Uploading banner:", banner.name);
          const event_bannerref = ref(storage, `orgBanner/${banner.name + v4()}`);
          const bannerSnapshot = await uploadBytes(event_bannerref, banner);
          const bannerUrl = await getDownloadURL(bannerSnapshot.ref);
          
          // console.log("Banner uploaded successfully. URL:", bannerUrl);
          updatedSetting.orgBanner = bannerUrl;
        }
      
        // console.log("Final data being sent to backend:", updatedSetting);
      
        // Now send the updated data to the backend
        const response = await axios.put(`${import.meta.env.VITE_SERVER_URL}/api/v1/admin/org`, updatedSetting, {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          }
        });
      
        if (response.status == 200) {
          toast.success("Setting has been updated successfully");
        }
      };
      
      return (
        <div className="flex min-h-screen bg-gray-100">
          {/* Sidebar */}
          <Toaster/>
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
    
                {/* Member Size */}
                <div>
                  <label className="block text-gray-600 font-medium">Number of Members</label>
                  <select
                    value={currentSetting.memberSize || 0}
                    onChange={(e) => setCurrentSetting((prev) => ({ ...prev, memberSize: parseInt(e.target.value) }))}
                    className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value={0}>Not Specified</option>
                    <option value={1}>10-20 members</option>
                    <option value={2}>20-50 members</option>
                    <option value={3}>50-100 members</option>
                    <option value={4}>100+ members</option>
                  </select>
                </div>
    
                {/* Uploads */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-600 font-medium">Upload Club Logo</label>
                    <input type="file" className="w-full border border-gray-300 rounded-lg p-2" onChange={(e) => setLogoUpload(e.target.files[0])} />
                  </div>
                  <div>
                    <label className="block text-gray-600 font-medium">Upload Club Banner</label>
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
