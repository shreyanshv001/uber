import React from "react";

function ConfirmedRide({ setconfirmRidePanel, setvehicleFound }) {
  return (
    <div>
      <h3 className="text-2xl  font-semibold mb-4">
        Confirm your Ride{" "}
        <i
          onClick={() => setconfirmRidePanel(false)}
          className="ri-arrow-down-wide-line ml-4 text-2xl"
        ></i>{" "}
      </h3>
      <div className="flex gap-2 flex-col justify-between items-center">
        <img
          className="h-24"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_yuUPk7wC2Kdnu7sKFJ9AUcRnilOK3oIKozElm2FFXzupO4ZeGIaiy8KbplKQIkGbeuA&usqp=CAU"
          alt=""
        />
        <div className="w-full flex flex-col  ">
          <div className="flex items-center gap-5 border-b-2 p-3">
            <i className="ri-map-pin-user-fill text-lg"></i>
            <div>
              <h3 className="text-lg font-medium ">563/11-A</h3>
              <p className="text-sm text-gray-600">Kankariya Talab, Bhopal</p>
            </div>
          </div>
          <div className="flex items-center gap-5 border-b-2 p-3">
            <i className="ri-square-line"></i>
            <div>
              <h3 className="text-lg font-medium">563/11-A</h3>
              <p className="text-sm text-gray-600">Kankariya Talab, Bhopal</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium"> ₹ 257.36</h3>
              <p className="text-sm text-gray-600">Cash</p>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            setvehicleFound(true);
            setconfirmRidePanel(false);
          }}
          className="bg-green-600 w-full text-white text-2xl py-1  rounded-md "
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

export default ConfirmedRide;
