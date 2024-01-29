import React from "react";
import Navbar from "../Navbar/Navbar";
import { useLocation, useNavigate } from "react-router-dom";

function BookingDoctor() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div>
        <div className="flex flex-col md:flex-row flex-wrap justify-between items-center p-4 bg-gray-200 rounded-md">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-semibold">Doctor Name:</h2>
            <p>{location.state.DoctorName}</p>
          </div>

          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-semibold">Date:</h2>
            <p>{location.state.Date}</p>
          </div>

          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-semibold">Time :</h2>
            <p>{location.state.Time}</p>
          </div>

          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-semibold">Fee:</h2>
            <p>Fee</p>
          </div>
        </div>
        <p className="font-medium text-lg text-gray-500 mt-4 text-green-600">
          Pay at Hospital . Please enter you details.
        </p>
        <div className="ml-24 mr-24 mt-8">
          <div className="flex flex-col">
            <label className="text-lg font-medium">Patient Name</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Patient Name"
              //   value={email}
              //   onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col mt-4">
            <label className="text-lg font-medium">Email</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Enter your email"
              type={"Email"}
              //   value={}
              //   onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col mt-4">
            <label className="text-lg font-medium">phone Number</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Enter your phone Number"
              type={"password"}
              //   value={}
              //   onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mt-8 flex flex-col gap-y-4 ">
            <button
              className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              onClick={() => navigate("/viewbooking")}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingDoctor;
