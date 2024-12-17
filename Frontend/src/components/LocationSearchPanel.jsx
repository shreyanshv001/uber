import React from "react";

function LocationSearchPanel({ setopen, setvehiclePanel }) {
  const locations = [
    "24B Near Kapoor's cafe, Sheriyans Coding Achool, Bhopal",
    "22B Near Malhotra's cafe, Sheriyans Coding Achool, Bhopal",
    "12A Near Sharma's cafe, Sheriyans Coding Achool, Bhopal",
    "18C Near Vikas cafe, Sheriyans Coding Achool, Bhopal",
  ];
  return (
    <div className="p-5 ">
      {locations.map((loc, i) => (
        <div
          onClick={() => {
            setopen(false);
            setvehiclePanel(true);
          }}
          key={i}
          className="flex items-center justify-start border-2 py-2 px-2 rounded-lg mb-2 active:border-black gap-4"
        >
          <h2 className="bg-[#eee] w-12 h-8 flex justify-center items-center rounded-full ">
            <i className="ri-map-pin-line  "></i>
          </h2>
          <h4 className="font-medium">{loc}</h4>
        </div>
      ))}
    </div>
  );
}

export default LocationSearchPanel;
