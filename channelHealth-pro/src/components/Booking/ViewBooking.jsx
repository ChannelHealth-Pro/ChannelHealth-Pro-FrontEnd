import React, { useState } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import Navbar from "../Navbar/Navbar";

function ViewBooking() {
  const [showPdf, setShowPdf] = useState(false);
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
  // Dummy data
  const appointmentNo = "12345";
  const patientInfo = {
    name: "John Doe",
    email: "john.doe@example.com",
    mobile: "123-456-7890",
  };
  const channelDetails = {
    doctorName: "Dr. Smith",
    billNumber: "B123456",
    date: "2024-01-30",
    time: "10:00 AM",
    hospitalName: "Medical Center",
    professionalFee: "$100",
    hospitalFee: "$50",
    discount: "$10",
    total: "$140",
  };

  // Create styles for PDF
  const pdfStyles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#E4E4E4",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
  });
  // Create PDF Document Component
  const MyDocument = () => (
    <Document>
      <Page size="A4" style={pdfStyles.page}>
        <View style={pdfStyles.section}>
          <Text>Channeling Successful</Text>
          <Text>Appointment No: {appointmentNo}</Text>

          <Text>Patient Information</Text>
          <Text>Name: {patientInfo.name}</Text>
          <Text>Email: {patientInfo.email}</Text>
          <Text>Mobile: {patientInfo.mobile}</Text>

          <Text>Channel Details</Text>
          <Text>Doctor Name: {channelDetails.doctorName}</Text>
          <Text>Bill Number: {channelDetails.billNumber}</Text>
          <Text>Date: {channelDetails.date}</Text>
          <Text>Time: {channelDetails.time}</Text>
          <Text>Hospital Name: {channelDetails.hospitalName}</Text>
          <Text>Professional Fee: {channelDetails.professionalFee}</Text>
          <Text>Hospital Fee: {channelDetails.hospitalFee}</Text>
          <Text>Discount: {channelDetails.discount}</Text>

          <Text>Total: {channelDetails.total}</Text>
        </View>
      </Page>
    </Document>
  );
  const handleDownloadClick = () => {
    setShowPdf(true);
  };
  return (
    <div>
      <Navbar />

      {!showPdf && (
        <div>
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
                    <strong>Mobile:</strong>{" "}
                    {appointmentData.patientInfo.mobile}
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
              {/* Download PDF button */}
              <button
                onClick={handleDownloadClick}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Download PDF
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Display PDF on the page when button is clicked */}
      {showPdf && (
        <div>
          <PDFViewer width="100%" height="600px">
            <MyDocument />
          </PDFViewer>
        </div>
      )}
    </div>
  );
}

export default ViewBooking;
