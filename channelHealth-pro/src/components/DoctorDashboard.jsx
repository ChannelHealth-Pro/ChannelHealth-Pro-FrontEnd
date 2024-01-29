import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import { useNavigate } from "react-router-dom";

const dummyBookedSlots = [
  { date: "2024-02-01", time: "10:00" },
  { date: "2024-02-02", time: "14:30" },
];

function DoctorDashboard() {
  const navigate = useNavigate();
  const [bookedSlots, setBookedSlots] = useState(dummyBookedSlots);

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex justify-between p-4 bg-gray-200">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          onClick={() => navigate("/addavailability")}
        >
          Add Availability
        </button>
      </div>
      <div className="flex-grow p-8">
        <h2 className="text-2xl font-bold mb-4">My Availability</h2>
        {bookedSlots.length > 0 ? (
          <div className="flex flex-wrap gap-4">
            {bookedSlots.map((slot, index) => (
              <div key={index} className="bg-white p-4 rounded-md shadow-md">
                <p className="font-bold">{`${slot.date} - ${slot.time}`}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No booked slots available.</p>
        )}
      </div>
    </div>
  );
}

export default DoctorDashboard;
