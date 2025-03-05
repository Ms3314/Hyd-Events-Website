import React from 'react';
import Cards from '../Components/Cards/Cards';

const Events = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">All Events</h1>
        <Cards isEventsPage={true} />
      </div>
    </div>
  );
};

export default Events; 