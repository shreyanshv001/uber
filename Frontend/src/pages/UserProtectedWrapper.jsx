import React, { useContext, useEffect } from "react";
import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function UserProtectedWrapper({ children }) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  if (!token) {
    return null;
  }

  return <div>{children}</div>;
}

export default UserProtectedWrapper;
