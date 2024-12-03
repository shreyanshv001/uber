import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";

function UserLogin() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [showPassword, setshowPassword] = useState(false);

  const { user, setuser } = useContext(UserDataContext);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/login`,
      userData
    );
    console.log(response.data);

    if (response.status === 200) {
      const data = response.data;

      localStorage.setItem("token", data.token);
      setuser(data.user);
      navigate("/home");
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
            New here?{" "}
            <Link to="/signup" className="text-blue-400">
              Create new Account
            </Link>{" "}
          </div>
        </form>
      </div>
      <div>
        <Link to={"/captain-login"}>
          <button className="bg-[#408952] mb-7 text-white  w-full font-semibold rounded outline-none border-none py-2 ">
            Sign in as Captain
          </button>
        </Link>
      </div>
    </div>
  );
}

export default UserLogin;
