import { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import Navbar from "./Navbar/Navbar";
import doctorsData from "./Data";

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
  }, []);
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
              : "Select Country"}
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
                placeholder="Enter country name"
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
                value={inputValueDoctor}
                onChange={(e) =>
                  setInputValueDoctor(e.target.value.toLowerCase())
                }
                placeholder="Enter country name"
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
                      }
                    }}
                  >
                    {country.name}
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CustomerDashboard;
