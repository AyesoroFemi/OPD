import React, { useState } from "react";
import { TfiAngleUp, TfiAngleDown } from "react-icons/tfi";
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="border-b-[1.5px] border-[#E5E7EB] py-5">
      <header
        onClick={() => setShowInfo(!showInfo)}
        className="flex justify-between cursor-pointer"
      >
        <h4 className="w-[90%] md:w-full text-base font-Grotesk mb-0 pb-1">
          {title}
        </h4>
        <button className="">
          {showInfo ? (
            <TfiAngleUp size={"16px"} />
          ) : (
            <TfiAngleDown size={"16px"} />
          )}
        </button>
      </header>
      {showInfo && (
        <p className="text-sm md:text-base font-Grotesk text-[#475467] leading-[22px] mb-0 pt-[18px] border-t-[1.5px] border-[#E5E7EB] lg:mt-4">
          {info}
        </p>
      )}
    </article>
  );
};

export default Question;
