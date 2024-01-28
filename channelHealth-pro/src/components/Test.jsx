import React, { useState } from "react";
import doctorsData from "./doctors"; // Assuming you have the doctors array in a separate file

const DoctorList = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  const specialties = [
    ...new Set(doctorsData.map((doctor) => doctor.specialty)),
  ];

  const handleSpecialtyChange = (event) => {
    const selectedSpecialty = event.target.value;
    setSelectedSpecialty(selectedSpecialty);

    const filteredDoctors = doctorsData.filter(
      (doctor) => doctor.specialty === selectedSpecialty
    );
    setFilteredDoctors(filteredDoctors);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="flex space-x-4">
        {/* First Dropdown for Specialties */}
        <select
          value={selectedSpecialty}
          onChange={handleSpecialtyChange}
          className="border p-2 rounded"
        >
          <option value="" disabled>
            Select Specialty
          </option>
          {specialties.map((specialty, index) => (
            <option key={index} value={specialty}>
              {specialty}
            </option>
          ))}
        </select>

        {/* Second Dropdown for Doctors */}
        <select className="border p-2 rounded" disabled={!selectedSpecialty}>
          <option value="" disabled>
            Select Doctor
          </option>
          {filteredDoctors.map((doctor, index) => (
            <option key={index} value={doctor.name}>
              {doctor.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DoctorList;


import { Fragment, useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import Navbar from "./Navbar/Navbar";
import doctors from "./Data";

function CustomerDashboard() {
  const [countries, setCountries] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);
  return (
    <div>
      <Navbar />
      <div className="relative flex h-16 top-10">
        <div className="w-72 ml-48 font-medium h-80">
          <div
            onClick={() => setOpen(!open)}
            className={`bg-white w-full p-2 flex items-center justify-between rounded ${
              !selected && "text-gray-700"
            }`}
          >
            {selected
              ? selected?.length > 25
                ? selected?.substring(0, 25) + "..."
                : selected
              : "Select Country"}
            <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
          </div>
          <ul
            className={`bg-white mt-2 overflow-y-auto ${
              open ? "max-h-60" : "max-h-0"
            } `}
          >
            <div className="flex items-center px-2 sticky top-0 bg-white">
              <AiOutlineSearch size={18} className="text-gray-700" />
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value.toLowerCase())}
                placeholder="Enter country name"
                className="placeholder:text-gray-700 p-2 outline-none"
              />
            </div>
            {countries?.map((country) => (
              <li
                key={country?.name}
                className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${
              country?.name?.toLowerCase() === selected?.toLowerCase() &&
              "bg-sky-600 text-white"
            }
            ${
              country?.name?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
                onClick={() => {
                  if (country?.name?.toLowerCase() !== selected.toLowerCase()) {
                    setSelected(country?.name);
                    setOpen(false);
                    setInputValue("");
                  }
                }}
              >
                {country?.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-72 ml-48 font-medium h-80">
          <div
            onClick={() => setOpen(!open)}
            className={`bg-white w-full p-2 flex items-center justify-between rounded ${
              !selected && "text-gray-700"
            }`}
          >
            {selected
              ? selected?.length > 25
                ? selected?.substring(0, 25) + "..."
                : selected
              : "Select Country"}
            <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
          </div>
          <ul
            className={`bg-white mt-2 overflow-y-auto ${
              open ? "max-h-60" : "max-h-0"
            } `}
          >
            <div className="flex items-center px-2 sticky top-0 bg-white">
              <AiOutlineSearch size={18} className="text-gray-700" />
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value.toLowerCase())}
                placeholder="Enter country name"
                className="placeholder:text-gray-700 p-2 outline-none"
              />
            </div>
            {countries?.map((country) => (
              <li
                key={country?.name}
                className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${
              country?.name?.toLowerCase() === selected?.toLowerCase() &&
              "bg-sky-600 text-white"
            }
            ${
              country?.name?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
                onClick={() => {
                  if (country?.name?.toLowerCase() !== selected.toLowerCase()) {
                    setSelected(country?.name);
                    setOpen(false);
                    setInputValue("");
                  }
                }}
              >
                {country?.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CustomerDashboard;
