import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../Navbar/Navbar";

const AddAvailability = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [bookedSlots, setBookedSlots] = useState([
    { date: "2024-02-01", time: "10:00" },
    { date: "2024-02-02", time: "14:30" },
  ]);

  const handleAddAvailability = () => {
    const selectedSlot = {
      date: selectedDate.toISOString().split("T")[0],
      time: selectedTime,
    };

    // Check if the selected slot is already booked
    if (isSlotAvailable(selectedSlot)) {
      console.log("Date:", selectedDate);
      console.log("Time:", selectedTime);
    } else {
      console.log("Selected slot is already booked. Choose another slot.");
    }
  };

  const isSlotAvailable = (selectedSlot) => {
    // Check if the selected slot is not in the bookedSlots array
    return !bookedSlots.some(
      (slot) =>
        slot.date === selectedSlot.date && slot.time === selectedSlot.time
    );
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-4">Add Availability</h1>
          <div className="flex flex-col mb-4">
            <label className="text-sm mb-1">Date:</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              className="border p-2 border-blue-500"
              minDate={new Date()}
              filterDate={(date) =>
                isSlotAvailable({ date: date.toISOString().split("T")[0] })
              }
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-sm mb-1">Time:</label>
            <input
              type="time"
              className="border p-2 border-blue-500"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
            />
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleAddAvailability}
            disabled={
              !selectedDate ||
              !selectedTime ||
              !isSlotAvailable({
                date: selectedDate.toISOString().split("T")[0],
                time: selectedTime,
              })
            }
          >
            Add Availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddAvailability;
