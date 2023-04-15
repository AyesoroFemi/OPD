import React from "react";
import Step from "../../../assets/step.svg";
import StepOne from "../../../assets/step1.svg";
import StepTwo from "../../../assets/step2.svg";

function Steps() {
  return (
    <div className="bg-[#6666FF] pt-[46px] lg:pt-[140px] pb-40 lg:pb-[228px] -translate-y-[90px] md:-translate-y-[150px]	">
      <div className=" max-w-screen-xl mx-auto px-4 lg:px-0">
        <p className="text-center text-2xl lg:text-[40px] text-white">
          Transact in 3 Steps
        </p>
        <p className="lg:w-[30%] text-center mx-auto text-white">
          Since transactions are offline, both devices involved in the handshake
        </p>
        <div className="lg:flex gap-8 mt-[60px] lg:mt-[112px]">
          <div className="rounded-lg bg-white shadow-sm mb-16 lg:mb-0 pl-3 pt-3 h-min">
            <p className="text-xl lg:text-2xl w-[90%] lg:w-[78%] mt-4 h-[90px] -mr-4 ">
              Press the button on the left to{" "}
              <span className="text-[#6666FF]">turn on the OPD</span>
            </p>
            <img src={StepTwo} alt="" />
          </div>
          <div className="rounded-lg shadow-sm bg-white mb-16 lg:mb-0 pl-3 pt-3 h-min">
            <p className="text-xl lg:text-2xl w-[90%] lg:w-[78%] bg-white h-[100px] translate-y-6">
              Press the up arrow button on the right{" "}
              <span className="text-[#6666FF]">to send e-naira</span>
            </p>
            <img src={Step} alt="" />
          </div>
          <div className="rounded-lg shadow-sm pl-3 pt-3 bg-white h-min">
            <p className="text-xl lg:text-2xl w-[90%] lg:w-[78%]  bg-white h-[100px] translate-y-6">
              Press the button on the right to{" "}
              <span className="text-[#6666FF]">turn on the OPD</span>
            </p>
            <img src={StepOne} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
