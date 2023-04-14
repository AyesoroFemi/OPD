import React from "react";
import OffProApp from "../assets/OffPro-app.svg";
import GooglePlay from "../assets/download.svg";
import AppleStore from "../assets/download_btn.svg";

function Download() {
  return (
    <div className="bg-[#6666FF] h-min">
      <div className="max-w-screen-xl mx-auto font-Grotesk pt-[95px]">
        <div className="flex">
          <div className="pl-20 basis-1/2">
            <img src={OffProApp} alt="" />
          </div>
          <div className="basis-1/2">
            <p className="text-5xl w-11/12 text-white font-Cabinet_Grotesk">
              This is a product designed to allow offline transaction
            </p>
            <p className="w-10/12 text-xl text-white/70 mt-4">
              This will be a unique product designed to allow offline
              transactions using an offline-ledger blockchain approach.
            </p>
            <div className="flex mt-14 gap-4">
              <img src={GooglePlay} alt="Google__pay" />
              <img src={AppleStore} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Download;
