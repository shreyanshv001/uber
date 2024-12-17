import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmedRide from "../components/ConfirmedRide";
import LookingForCaptain from "../components/LookingForCaptain";
import WaitingForCaptain from "../components/WaitingForCaptain";

function Home() {
  const [pickup, setpickup] = useState("");
  const [destination, setdestination] = useState("");
  const [open, setopen] = useState(false);
  const panelRef = useRef(null);
  const [vehiclePanel, setvehiclePanel] = useState(false);
  const vehiclePanelref = useRef(null);
  const [confirmRidePanel, setconfirmRidePanel] = useState(false);
  const confirmRideRef = useRef(null);
  const [vehicleFound, setvehicleFound] = useState(false);
  const vehicleFoundRef = useRef(null);
  const [waitingForCaptain, setwaitingForCaptain] = useState(false);
  const waitingForDriverRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (open) {
        gsap.to(panelRef.current, {
          height: "70%",
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
        });
      }
    },
    [open]
  );

  useGSAP(
    function () {
      if (vehiclePanel) {
        gsap.to(vehiclePanelref.current, {
          transform: "translateY(0) ",
        });
      } else {
        gsap.to(vehiclePanelref.current, {
          transform: "translateY(100%) ",
        });
      }
    },
    [vehiclePanel]
  );
  useGSAP(
    function () {
      if (confirmRidePanel) {
        gsap.to(confirmRideRef.current, {
          transform: "translateY(0) ",
        });
      } else {
        gsap.to(confirmRideRef.current, {
          transform: "translateY(100%) ",
        });
      }
    },
    [confirmRidePanel]
  );
  useGSAP(
    function () {
      if (vehicleFound) {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(0) ",
        });
      } else {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(100%) ",
        });
      }
    },
    [vehicleFound]
  );
  useGSAP(
    function () {
      if (waitingForCaptain) {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(0) ",
        });
      } else {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(100%) ",
        });
      }
    },
    [waitingForCaptain]
  );
  return (
    <div className="h-screen w-full relative overflow-hidden ">
      <img
        className="w-16 mb-10 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />
      <div className=" w-full h-full">
        {/* image for temp */}
        <img
          className="w-full h-full object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoZOolFmQIJx888oMaxu5evBGIinedUQ8oAZfbxbW_UiIppJlHfoIwRPTq44qvyogx77U&usqp=CAU"
          alt=""
        />
      </div>
      <div className=" h-screen absolute top-0 flex flex-col justify-end w-full">
        <div className="h-[30%] p-5 relative bg-white ">
          {open ? (
            <i
              onClick={() => setopen(false)}
              className="ri-arrow-down-wide-line mb-4 text-2xl"
            ></i>
          ) : (
            <h4 className="text-2xl font-semibold mb-5">Find a trip</h4>
          )}

          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            onClick={() => setopen(true)}
            action=""
            className="relative flex flex-col gap-5"
          >
            <div className="z-10 line absolute h-16 w-1 top-[50%] -translate-y-1/2 left-5 bg-gray-700  rounded-full"></div>
            <div className="relative">
              <input
                className="bg-[#eee] pl-12 w-full py-2 outline-black border-none  rounded-md text-base "
                type="text"
                value={pickup}
                onChange={(e) => setpickup(e.target.value)}
                placeholder="Add a pick-up location"
              />{" "}
              <i
                onClick={() => setpickup("")}
                className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${
                  pickup === "" ? null : "ri-close-line"
                } `}
              ></i>
            </div>
            <div className="relative">
              <input
                className="bg-[#eee] pl-12 py-2 outline-black border-none w-full rounded-md text-base"
                type="text"
                value={destination}
                onChange={(e) => setdestination(e.target.value)}
                placeholder="Enter your destination"
              />
              <i
                onClick={() => setdestination("")}
                className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${
                  destination === "" ? null : "ri-close-line"
                } `}
              ></i>
            </div>
          </form>
        </div>
        <div ref={panelRef} className={` h-[70%] bg-white `}>
          <LocationSearchPanel
            setopen={setopen}
            setvehiclePanel={setvehiclePanel}
          />
        </div>
      </div>
      <div
        ref={vehiclePanelref}
        className="fixed w-full z-10 bottom-0 translate-y-full p-5 bg-white rounded-tr-2xl rounded-tl-2xl "
      >
        <VehiclePanel
          setconfirmRidePanel={setconfirmRidePanel}
          setvehiclePanel={setvehiclePanel}
        />
      </div>
      <div
        ref={confirmRideRef}
        className="fixed w-full z-10 bottom-0 translate-y-full p-5 bg-white rounded-tr-2xl rounded-tl-2xl "
      >
        <ConfirmedRide
          setconfirmRidePanel={setconfirmRidePanel}
          setvehicleFound={setvehicleFound}
        />
      </div>
      <div
        ref={vehicleFoundRef}
        className="fixed w-full z-10 bottom-0 translate-y-full p-5 bg-white rounded-tr-2xl rounded-tl-2xl "
      >
        <LookingForCaptain setvehicleFound={setvehicleFound} />
      </div>
      <div
        ref={waitingForDriverRef}
        className="fixed w-full z-10 bottom-0 translate-y-full  p-5 bg-white rounded-tr-2xl rounded-tl-2xl "
      >
        <WaitingForCaptain setwaitingForCaptain={setwaitingForCaptain} />
      </div>
    </div>
  );
}

export default Home;
