import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserLogout() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          localStorage.removeItem("token");
          console.log("Logged out successfully");
          navigate("/login");
        }
      })
      .catch((error) => {
        console.error("Logout failed:", error);
      });
  }, [navigate, token]);

  return <div>UserLogout</div>;
}

export default UserLogout;
