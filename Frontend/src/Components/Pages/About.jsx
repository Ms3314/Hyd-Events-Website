import React from 'react'
import Navbar from '../Navbar/Navbar'
import ResponsiveMenu from '../Navbar/ResponsiveMenu'

const About = () => {
  const Information =[
 {
    id:1,
    name:"Dev1",
    proffesion:"CSE",
    position:"head",
    portfolio:"lorem  jsbgaslcbacjb yscjsacga cfdgdddgsfg gdlafs gsyao a;sod sd ishda phcsi uhscjsdwo",
    Linkdn:""

  },
  {
    id:2,
    name:"Dev1",
    proffesion:"CSE",
    position:"head",
    portfolio:"lorem gdlafs gsyao a;sod sd ishda phcsi uhscjsdwo",
    Linkdn:""

  },
  {
    id:3,
    name:"Dev1",
    proffesion:"CSE",
    position:"head",
    portfolio:"lorem gdlafs gsyao a;sod sd ishda phcsi uhscjsdwo",
    Linkdn:""

  },
]
  return (
    <>
    <h1 className='flex text-3xl text-center justify-center font-bold text-primary'>Our Mission and Vision</h1>
    <div className='flex text-center justify-center px-38 py-12'>Our mission is to simplify the process of technical event registration for engineering students and provide them with real-time updates on current events. By creating a user-friendly platform, we aim to bridge the gap between event organizers and participants, ensuring seamless communication, efficient registration, and timely updates. 
    Our vision is to become the leading platform for technical event registration and updates in engineering colleges, driving the growth of engineering communities across the globe. We aspire to create an ecosystem that promotes knowledge exchange, collaboration, and continuous learning through timely event notifications and a seamless registration process. 
    </div>
    <div className='flex text-3xl text-center justify-center font-bold text-primary'>
      Our Team
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-center gap-4 m-6 p-6 md:px-8 md:py-6 lg:mx-40 lg:p-30'>
      {Information.map((content)=>(
        
        <ul className='list-none flex flex-col justify-center items-center' key={content.id}>
          <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#5985E1"><path d="M226-262q59-42.33 121.33-65.5 62.34-23.17 132.67-23.17 70.33 0 133 23.17T734.67-262q41-49.67 59.83-103.67T813.33-480q0-141-96.16-237.17Q621-813.33 480-813.33t-237.17 96.16Q146.67-621 146.67-480q0 60.33 19.16 114.33Q185-311.67 226-262Zm253.88-184.67q-58.21 0-98.05-39.95Q342-526.58 342-584.79t39.96-98.04q39.95-39.84 98.16-39.84 58.21 0 98.05 39.96Q618-642.75 618-584.54t-39.96 98.04q-39.95 39.83-98.16 39.83ZM480.31-80q-82.64 0-155.64-31.5-73-31.5-127.34-85.83Q143-251.67 111.5-324.51T80-480.18q0-82.82 31.5-155.49 31.5-72.66 85.83-127Q251.67-817 324.51-848.5T480.18-880q82.82 0 155.49 31.5 72.66 31.5 127 85.83Q817-708.33 848.5-635.65 880-562.96 880-480.31q0 82.64-31.5 155.64-31.5 73-85.83 127.34Q708.33-143 635.65-111.5 562.96-80 480.31-80Zm-.31-66.67q54.33 0 105-15.83t97.67-52.17q-47-33.66-98-51.5Q533.67-284 480-284t-104.67 17.83q-51 17.84-98 51.5 47 36.34 97.67 52.17 50.67 15.83 105 15.83Zm0-366.66q31.33 0 51.33-20t20-51.34q0-31.33-20-51.33T480-656q-31.33 0-51.33 20t-20 51.33q0 31.34 20 51.34 20 20 51.33 20Zm0-71.34Zm0 369.34Z"/></svg>
          <li>{content.name}  {content.Linkdn}</li>
          <li>{content.proffesion}</li>
          <li>{content.position}</li>
          <li className='p-2'>{content.portfolio}</li>

        </ul>
      ))}

    </div>
    </>
  )
}

export default About