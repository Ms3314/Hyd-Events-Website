

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-red-700 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">HydEvents</h1>
          
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-8 transform transition duration-500 hover:scale-105">
            <div className="flex items-center mb-6">
              <div className="bg-red-600 p-3 rounded-full mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">What Drives Us</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We started Hyd Events with a simple dream: make it easier for college students to find and join tech events. As students ourselves, we know how frustrating it can be to miss out on great opportunities. Our platform is our way of solving a problem we've experienced firsthand – connecting passionate students with events that can spark their careers.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 transform transition duration-500 hover:scale-105">
            <div className="flex items-center mb-6">
              <div className="bg-red-600 p-3 rounded-full mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Where We're Heading</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Right now, we're starting small – focusing on Hyderabad's vibrant tech scene. But our dreams are big. We want to create more than just an event platform; we want to build a community where students can grow, learn, and connect. This is our first step, and we're excited about the journey ahead.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


export default About