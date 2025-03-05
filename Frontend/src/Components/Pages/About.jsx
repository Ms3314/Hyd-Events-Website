import React from 'react'
import Navbar from '../Navbar/Navbar'
import ResponsiveMenu from '../Navbar/ResponsiveMenu'

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Samiuddin",
      profession: "CSE",
      role: "Full Stack Developer",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      linkedin: "https://linkedin.com/in/samiuddin",
    },
    {
      id: 2,
      name: "Iqra",
      profession: "CSE",
      role: "UI/UX Designer",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      linkedin: "https://linkedin.com/in/iqra",
    },
    {
      id: 3,
      name: "Shafi",
      profession: "CSE",
      role: "Backend Developer",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      linkedin: "https://linkedin.com/in/shafi",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">About Hyd Events</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Connecting students with the best technical events in Hyderabad
          </p>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-8 transform transition duration-500 hover:scale-105">
            <div className="flex items-center mb-6">
              <div className="bg-blue-600 p-3 rounded-full mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to simplify the process of technical event registration for engineering students and provide them with real-time updates on current events. By creating a user-friendly platform, we aim to bridge the gap between event organizers and participants, ensuring seamless communication, efficient registration, and timely updates.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 transform transition duration-500 hover:scale-105">
            <div className="flex items-center mb-6">
              <div className="bg-indigo-600 p-3 rounded-full mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Our vision is to become the leading platform for technical event registration and updates in engineering colleges, driving the growth of engineering communities across the globe. We aspire to create an ecosystem that promotes knowledge exchange, collaboration, and continuous learning through timely event notifications and a seamless registration process.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
                <div className="h-64 bg-gray-200">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-blue-600 mb-2">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.profession}</p>
                  
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="bg-blue-600 rounded-lg shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="mb-8">
                Have questions or suggestions? We'd love to hear from you! Reach out to our team.
              </p>
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span>contact@hydevents.com</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>Hyderabad, Telangana, India</span>
              </div>
            </div>
            <div className="md:w-1/2 bg-white p-8 md:p-12">
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" 
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" 
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" 
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About