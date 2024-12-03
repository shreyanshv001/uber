import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function CaptainLogin() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [showPassword, setshowPassword] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      email: email,
      password: password,
    };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captain/login`,
      captainData
    );
    console.log(response);

    if (response.status === 200) {
      const data = response.data;
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }
    setemail("");
    setpassword("");
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
          <h3 className="text-lg font-medium mb-2">What's your email?</h3>
          <input
            className="bg-[#eeeeee] w-full mb-7 rounded outline-none border-none px-8 py-1 "
            required
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <div className="relative mb-7">
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
          <button className="bg-[#111] mb-2 text-white  w-full font-semibold rounded outline-none border-none  py-2 ">
            Login
          </button>
          <div className="text-center">
            Register as Captain{" "}
            <Link to="/captain-signup" className="text-blue-400">
              Create new Account
            </Link>{" "}
          </div>
        </form>
      </div>
      <div>
        <Link to={"/login"}>
          <button className="bg-[#d5622d] mb-7 text-white  w-full font-semibold rounded outline-none border-none py-2 ">
            Sign in as User
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CaptainLogin;
