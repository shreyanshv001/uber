import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1585393948915-011d724d4c2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRyYWZmaWMlMjBsaWdodHxlbnwwfHwwfHx8MA%3D%3D)] h-screen pt-8 w-full  flex justify-between flex-col ">
        <img
          className="w-16 ml-8"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <div className="bg-white py-4 pb-8 px-5 ">
          <h2 className="font-bold text-3xl">Get Started with Uber</h2>
          <Link to={"/login"}>
            <button className="w-full bg-black text-white px-7 py-3 rounded-lg mt-3 flex justify-between items-center">
              <span className="flex-grow text-center">Continue</span>
              <i className="ri-arrow-right-line"></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
