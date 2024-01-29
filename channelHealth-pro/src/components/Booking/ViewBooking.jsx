import React from "react";
import Navbar from "../Navbar/Navbar";

function ViewBooking() {
  const appointmentData = {
    appointmentNo: "123456",
    patientInfo: {
      name: "John Doe",
      email: "john@example.com",
      mobile: "123-456-7890",
    },
    channelDetails: {
      doctorName: "Dr. Smith",
      billNumber: "789012",
      date: "2024-01-29",
      time: "10:00 AM",
      hospitalName: "City Hospital",
      professionalFee: "$100",
      hospitalFee: "$50",
      discount: "$20",
    },
    total: "$130",
  };

  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md">
          <h1 className="text-2xl font-bold mb-4 text-red-700">
            Channeling Successful
          </h1>

          <div className="mb-6">
            <strong>Appointment No:</strong> {appointmentData.appointmentNo}
          </div>

          <div className="mb-6">
            <strong>Patient Information:</strong>
            <ul>
              <li>
                <strong>Name:</strong> {appointmentData.patientInfo.name}
              </li>
              <li>
                <strong>Email:</strong> {appointmentData.patientInfo.email}
              </li>
              <li>
                <strong>Mobile:</strong> {appointmentData.patientInfo.mobile}
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <strong>Channel Details:</strong>
            <ul>
              <li>
                <strong>Doctor Name:</strong>{" "}
                {appointmentData.channelDetails.doctorName}
              </li>
              <li>
                <strong>Bill Number:</strong>{" "}
                {appointmentData.channelDetails.billNumber}
              </li>
              <li>
                <strong>Date:</strong> {appointmentData.channelDetails.date}
              </li>
              <li>
                <strong>Time:</strong> {appointmentData.channelDetails.time}
              </li>
              <li>
                <strong>Hospital Name:</strong>{" "}
                {appointmentData.channelDetails.hospitalName}
              </li>
              <li>
                <strong>Professional Fee:</strong>{" "}
                {appointmentData.channelDetails.professionalFee}
              </li>
              <li>
                <strong>Hospital Fee:</strong>{" "}
                {appointmentData.channelDetails.hospitalFee}
              </li>
              <li>
                <strong>Discount:</strong>{" "}
                {appointmentData.channelDetails.discount}
              </li>
            </ul>
          </div>

          <div className="mb-6 text-red-600">
            <strong>Total:</strong> {appointmentData.total}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewBooking;
