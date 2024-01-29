import React from "react";
import Navbar from "./Navbar/Navbar";
import { useNavigate } from "react-router-dom";

function DoctorDashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div>
        <button
          className="m-4 px-10 py-5 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          onClick={() => navigate("/addavailability")}
        >
          Add Availability
        </button>
      </div>
    </div>
  );
}

export default DoctorDashboard;
