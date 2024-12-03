import React, { createContext, useContext, useState } from "react";

export const CaptainDataContext = createContext();

function CaptainContext({ children }) {
  const [captain, setcaptain] = useState({
    fullname: {
      firstname: "",
      lastname: "",
    },
    email: "",
    password: "",
    vehicle: {
      color: "",
      plate: "",
      capacity: 0,
      vehicleType: "",
    },
  });

  return (
    <CaptainDataContext.Provider value={{ captain, setcaptain }}>
      {children}
    </CaptainDataContext.Provider>
  );
}

export default CaptainContext;
