import React from "react";
import OffProApp from "../assets/OffPro-app.svg";
import GooglePlay from "../assets/download.svg";
import AppleStore from "../assets/download_btn.svg";

function Download() {
  return (
    <div className="bg-[#6666FF] h-min">
      <div className="max-w-screen-xl mx-auto font-Grotesk pt-[95px] px-4 lg:px-0">
        <div className="flex flex-col-reverse lg:flex lg:flex-row ">
          <div className="lg:pl-20 basis-1/2 mt-20 lg:mt-0">
            <img src={OffProApp} alt="" />
          </div>
          <div className="basis-1/2">
            <p className="text-2xl w-[80%] mx-auto lg:mx-0 lg:text-5xl lg:w-11/12 text-white font-Cabinet_Grotesk">
              This is a product designed to allow offline transaction
            </p>
            <p className="w-full text-center lg:text-left lg:w-10/12 text-base lg:text-xl text-white/70 mt-4">
              This will be a unique product designed to allow offline
              transactions using an offline-ledger blockchain approach.
            </p>
            <div className="flex mt-14 gap-4">
              <div className="w-full md:w-1/2">
                <img src={GooglePlay} alt="Google__pay" />
              </div>
              <div className="w-full">
                <img src={AppleStore} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Download;
