import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

function CaptainSignup() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [showPassword, setshowPassword] = useState(false);

  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const { captain, setcaptain } = useContext(CaptainDataContext);
  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captain/register`,
      captainData
    );

    if (response.status === 201) {
      const data = response.data;
      setcaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }

    setemail("");
    setpassword("");
    setfirstname("");
    setlastname("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleType("");
    setVehicleCapacity("");
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <form onSubmit={(e) => submitHandler(e)} action="">
          <h3 className="text-lg font-medium mb-2">Enter Captain's name</h3>
          <div className="flex gap-4">
            <input
              className="bg-[#eeeeee] w-1/2  mb-4 rounded outline-none border-none px-8 py-1 "
              required
              type="text"
              placeholder="First name"
              value={firstname}
              onChange={(e) => setfirstname(e.target.value)}
            />
            <input
              className="bg-[#eeeeee] w-1/2  mb-4 rounded outline-none border-none px-8 py-1 "
              required
              type="text"
              placeholder="Last name"
              value={lastname}
              onChange={(e) => setlastname(e.target.value)}
            />
          </div>

          <h3 className="text-lg font-medium mb-2">Enter Captain's email</h3>
          <input
            className="bg-[#eeeeee] w-full mb-4 rounded outline-none border-none px-8 py-1 "
            required
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <div className="relative mb-4">
            <input
              className="bg-[#eeeeee] w-full rounded outline-none border-none px-8 py-1 "
              type={showPassword ? "text" : "password"}
              required
              placeholder="Password "
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <i
              onClick={() => setshowPassword(!showPassword)}
              className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${
                password === "" ? "hidden" : ""
              } ${showPassword ? "ri-eye-off-line" : "ri-eye-line"}`}
            ></i>
          </div>
          <h3 className="text-lg font-medium mb-2">Vehicle Details</h3>
          <div className="flex gap-4 mb-4">
            <input
              className="bg-[#eeeeee] w-1/2 rounded outline-none border-none px-7 py-1"
              required
              type="text"
              placeholder="Vehicle Color"
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
            />
            <input
              className="bg-[#eeeeee] w-1/2 rounded outline-none border-none px-7 py-1"
              required
              type="text"
              placeholder="License Plate"
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
            />
          </div>
          <div className="flex gap-4 mb-7">
            <select
              className="bg-[#eeeeee] w-1/2 rounded outline-none border-none px-5 py-1"
              required
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option value="">Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="bike">Bike</option>
            </select>
            <input
              className="bg-[#eeeeee] w-1/2 rounded outline-none border-none px-4 py-1"
              required
              type="number"
              min="1"
              max="6"
              placeholder="Seating Capacity"
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
            />
          </div>
          <button className="bg-[#111] mb-2 text-white  w-full font-semibold rounded outline-none border-none  py-2 ">
            Sign Up
          </button>
          <div className="text-center">
            Already have an Account?{" "}
            <Link to="/captain-login" className="text-blue-400">
              Log In
            </Link>{" "}
          </div>
        </form>
      </div>
      <div>
        <p className="text-[10px] text-zinc-600 leading-snug ">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and Terms of
          Service apply.
        </p>
      </div>
    </div>
  );
}

export default CaptainSignup;
