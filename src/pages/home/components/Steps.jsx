import React from "react";
import Step from "../../../assets/step.svg";
import StepOne from "../../../assets/step1.svg";
import StepTwo from "../../../assets/step2.svg";

function Steps() {
  return (
    <div className="bg-[#6666FF] pt-[140px] pb-[228px] -translate-y-[150px]	">
      <div className=" max-w-screen-xl mx-auto ">
        <p className="text-center text-[40px] text-white">
          Transact in 3 Steps
        </p>
        <p className="w-[30%] text-center mx-auto text-white">
          Since transactions are offline, both devices involved in the handshake
        </p>
        <div className="flex gap-8 mt-[112px]">
          <div className="rounded-lg bg-white shadow-sm pl-3 pt-3 h-min">
            <p className="text-2xl w-[78%] mt-4 h-[90px] -mr-4 ">
              Press the button on the left to{" "}
              <span className="text-[#6666FF]">turn on the OPD</span>
            </p>
            <img src={StepTwo} alt="" />
          </div>
          <div className="rounded-lg shadow-sm bg-white pl-3 pt-3 h-min">
            <p className="text-2xl w-[78%] bg-white h-[100px] translate-y-6">
              Press the button on the left to{" "}
              <span className="text-[#6666FF]">turn on the OPD</span>
            </p>
            <img src={Step} alt="" />
          </div>
          <div className="rounded-lg shadow-sm pl-3 pt-3 bg-white h-min">
            <p className="text-2xl w-[78%]  bg-white h-[100px] translate-y-6">
              Press the button on the left to{" "}
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
