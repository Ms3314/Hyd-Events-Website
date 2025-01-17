import React,{useState} from 'react'

const Settingpg = () => {
    const [Setting, setSetting] = useState([]);
      const [currentSetting, setCurrentSetting] = useState({
        NameOfOrg: '',
        Collegeaff: '',
        OrgEmail: '',
        OrgDescription:'',
        img: '',
      });
    
      const handleSubmitSetting = (e) => {
        e.preventDefault();
        setSetting(prevSettings => [prevSettings, currentSetting]);
        setCurrentSetting({
        NameOfOrg: '',
        Collegeaff: '',
        OrgEmail: '',
        OrgDescription:'',
        img: '',
        });
      };
  return (
    
      <div className="form-container bg-gray-300 rounded-lg p-6 shadow-md min-h-screen flex justify-center items-center">
      <div className="flex flex-col bg-white justify-center items-center w-full max-w-md mx-auto shadow-lg rounded-lg">
        <form
          onSubmit={handleSubmitSetting}
          className="w-full p-4 sm:p-6 md:p-8"
        >
          <div className="flex flex-col space-y-4">
           <div className="flex flex-col">
              <input
                className="border-2 rounded-lg p-2 w-full"
                type="text"
                placeholder="Name of Org"
                value={currentSetting.NameOfOrg}
                onChange={(e) =>
                  setCurrentSetting({ currentSetting, NameOfOrg: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col space-y-4">
          
            <div className="flex flex-col">
              <input
                className="border-2 rounded-lg p-2 w-full"
                type="text"
                placeholder="College affilated"
                value={currentSetting.Collegeaff}
                onChange={(e) =>
                  setCurrentSetting({ currentSetting, Collegeaff: e.target.value })
                }
              />
            </div>

           
            <div className="flex flex-col">
              <input
                className="border-2 rounded-lg p-2 w-full"
                type="email"
                placeholder="Org email"
                value={currentSetting.OrgEmail}
                onChange={(e) =>
                  setCurrentSetting({ currentSetting, OrgEmail: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col">
              <input
                className="border-2 rounded-lg p-2 w-full"
                type="email"
                placeholder="Org description"
                value={currentSetting.OrgDescription}
                onChange={(e) =>
                  setCurrentSetting({ currentSetting, OrgDescription: e.target.value })
                }
              />
            </div>
           
            

            {/* for upload logo */}
            <div className="flex flex-col">
              <input
                className="border-2 rounded-lg p-2 w-full"
                type="file"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-black hover:bg-black text-white font-bold py-2 px-6 rounded-lg"
              >
                Confirm
              </button>
            </div>
            </div>
            </div>
    </form>
    </div> 
    </div>
  )
}

export default Settingpg
