import { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar/Navbar";
import doctorsData from "./Data";
import doctorAvailability from "./DoctorAvailabilityData";
import { useNavigate } from "react-router-dom";

function CustomerDashboard() {
  const [doctors, setDoctors] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [inputValueDoctor, setInputValueDoctor] = useState("");
  const [selected, setSelected] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [openspecialties, setOpenSpecialties] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [doctorId, setDoctorId] = useState(null);
  const [changeDoctorID, setChangeDoctorID] = useState(false);
  const [predoctorId, setPredoctorId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setChangeDoctorID(true);
  }, [doctorId]);
  const [availability, setAvailability] = useState("");
  const [session, setSession] = useState(false);
  const [time, setTime] = useState("");
  const [number, setNumber] = useState("");

  const specialties = [
    ...new Set(doctorsData.map((doctor) => doctor.specialty)),
  ];

  const handleSpecialtyChange = (specialty) => {
    const selectedSpecialty = specialty;
    setSelectedSpecialty(selectedSpecialty);

    const filteredDoctors = doctorsData.filter(
      (doctor) => doctor.specialty === selectedSpecialty
    );
    setFilteredDoctors(filteredDoctors);
  };

  useEffect(() => {
    setDoctors(doctorsData);
    setAvailability(doctorAvailability);
    console.log(doctorAvailability);
    console.log(doctorsData);
  }, [doctorId]);
  useEffect(() => {}, [session]);
  const notify = () => {
    toast.error("🦄 No Session!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <div>
      <Navbar />
      <div className="relative flex h-16 top-10">
        <div className="w-72 ml-48 font-medium h-80">
          <div
            onClick={() => setOpenSpecialties(!openspecialties)}
            className={`bg-white w-full p-2 flex items-center justify-between rounded ${
              !selected && "text-gray-700"
            }`}
          >
            {selected
              ? selected?.length > 25
                ? selected?.substring(0, 25) + "..."
                : selected
              : "Select Specialty"}
            <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
          </div>
          <ul
            className={`bg-white mt-2 overflow-y-auto ${
              openspecialties ? "max-h-60" : "max-h-0"
            } `}
          >
            <div className="flex items-center px-2 sticky top-0 bg-white">
              <AiOutlineSearch size={18} className="text-gray-700" />
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value.toLowerCase())}
                placeholder="Enter specialty name"
                className="placeholder:text-gray-700 p-2 outline-none"
              />
            </div>
            {specialties.map((specialty, index) => (
              <li
                key={index}
                className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${
              specialty?.toLowerCase() === selected?.toLowerCase() &&
              "bg-sky-600 text-white"
            }
            ${
              specialty?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
                onClick={() => {
                  if (specialty?.toLowerCase() !== selected.toLowerCase()) {
                    setSelected(specialty);
                    setOpenSpecialties(false);
                    setInputValue("");
                    handleSpecialtyChange(specialty);
                    setOpen(true);
                  }
                }}
              >
                {specialty}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-72 ml-48 font-medium h-80">
          <div
            onClick={() => setOpen(!open)}
            className={`bg-white w-full p-2 flex items-center justify-between rounded ${
              !selectedDoctor && "text-gray-700"
            }`}
          >
            {selectedDoctor
              ? selectedDoctor?.length > 25
                ? selectedDoctor?.substring(0, 25) + "..."
                : selectedDoctor
              : "Select Doctor"}
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
                value={inputValueDoctor}
                onChange={(e) =>
                  setInputValueDoctor(e.target.value.toLowerCase())
                }
                placeholder="Enter Doctor name"
                className="placeholder:text-gray-700 p-2 outline-none"
              />
            </div>
            {selectedSpecialty
              ? filteredDoctors.map((doctor, index) => (
                  <li
                    key={index}
                    className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${
              doctor.name?.toLowerCase() === selectedDoctor?.toLowerCase() &&
              "bg-sky-600 text-white"
            }
            ${
              doctor.name?.toLowerCase().startsWith(inputValueDoctor)
                ? "block"
                : "hidden"
            }`}
                    onClick={() => {
                      if (
                        doctor.name?.toLowerCase() !==
                        selectedDoctor.toLowerCase()
                      ) {
                        setSelectedDoctor(doctor.name);
                        setOpen(false);
                        setInputValueDoctor("");
                        setDoctorId(doctor.id);
                      }
                    }}
                  >
                    {doctor.name}
                  </li>
                ))
              : doctors?.map((country, index) => (
                  <li
                    key={index}
                    className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${
              country.name?.toLowerCase() === selectedDoctor?.toLowerCase() &&
              "bg-sky-600 text-white"
            }
            ${
              country.name?.toLowerCase().startsWith(inputValueDoctor)
                ? "block"
                : "hidden"
            }`}
                    onClick={() => {
                      if (
                        country.name?.toLowerCase() !==
                        selectedDoctor.toLowerCase()
                      ) {
                        setSelectedDoctor(country.name);
                        setOpen(false);
                        setInputValueDoctor("");
                        setDoctorId(country.id);
                      }
                    }}
                  >
                    {country.name}
                  </li>
                ))}
          </ul>
        </div>
      </div>
      <div className="ml-11 mt-10">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
      <div className="ml-4 mt-9 flex flex-nowrap ">
        {doctorId ? (
          doctorAvailability
            .filter((availability) => doctorId === availability.doctorId)
            .map((availability, index) => (
              <button
                key={index}
                onClick={() => {
                  setSession(true);
                  setTime(availability.time);
                  setNumber(availability.patientCount);
                  setPredoctorId(doctorId);
                }}
                className="m-4 px-10 py-5 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                {availability.date}
              </button>
            ))
        ) : (
          <div>
            <p className=" ml-60 text-red-700 uppercase ...">
              Please Select Doctor !
            </p>
          </div>
        )}
      </div>
      <div>
        {doctorId === predoctorId && session ? (
          <div className="flex flex-col md:flex-row flex-wrap justify-between items-center p-4 bg-gray-200 rounded-md">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-semibold">Hospital Name:</h2>
              <p>City Hospital</p>
            </div>

            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-semibold">Place:</h2>
              <p>New York</p>
            </div>

            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-semibold">Booking Number:</h2>
              <p>{number}</p>
            </div>

            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-semibold">Doctor Time:</h2>
              <p>{time}</p>
            </div>

            <button
              className="mt-4 md:mt-0 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              onClick={() => navigate("/booking")}
            >
              Book Now
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default CustomerDashboard;
