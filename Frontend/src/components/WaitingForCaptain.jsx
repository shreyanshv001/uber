import React from "react";

function WaitingForCaptain({ setwaitingForCaptain }) {
  return (
    <div>
      <div>
        <h3 className="text-2xl text-center  font-semibold ">
          <i
            onClick={() => {
              setwaitingForCaptain(false);
            }}
            className="ri-arrow-down-wide-line  text-2xl"
          ></i>{" "}
        </h3>
        <div className="flex gap-2 flex-col justify-between  items-center">
          <div className="flex justify-between w-full">
            <img
              className="h-20"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_yuUPk7wC2Kdnu7sKFJ9AUcRnilOK3oIKozElm2FFXzupO4ZeGIaiy8KbplKQIkGbeuA&usqp=CAU"
              alt=""
            />
            <div className="flex flex-col  ">
              <h3 className="text-md">Shreyansh</h3>
              <h2 className="text-lg font-bold -mt-1 ">MP20 ZC 3432</h2>
              <p className="text-sm text-gray-600 -mt-1 ">Maruti Suzuki Alto</p>
            </div>
          </div>

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
        </div>
      </div>
    </div>
  );
}

export default WaitingForCaptain;
