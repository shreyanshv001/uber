import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CaptainLogout() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/captain/logout`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
          localStorage.removeItem("token");
          navigate("/captain-login");
        }
      })
      .catch((err) => {
        console.error("Logout failed:", err);
      });
  }, [navigate, token]);
  return <div>CaptainLogout</div>;
}

export default CaptainLogout;
