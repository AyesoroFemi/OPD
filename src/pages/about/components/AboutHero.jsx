import React from 'react'
import AboutImage from "../../../assets/about-img.svg";


function AboutHero() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto mt-[102px] font-Grotesk">
        <div className="flex gap-5">
          <div className="basis-1/2">
            <p className="text-2xl font-Cabinet_Grotesk text-[#808080] #808080">
              About Us
            </p>
            {/* <div className="flex items-center w-[62%] rounded-3xl bg-[#F0F0FF]">
              <span className="font-[500] bg-[#6666FF] mr-4 text-white rounded-[45px] py-1 px-3 text-sm ml-1 my-1 ">
                New
              </span>
              <span className="font-[500]">
                Learn how to setup your e-naira wallet
              </span>
              <img
                className="ml-6 h-[20px] w-[20px]"
                src={Arrow}
                alt="forward_arrow"
              />
            </div> */}
            <p className=" font-Cabinet_Grotesk text-[#1A1A1A] mt-4 text-[72px] leading-[77px]">
              Leveraging the <br />{" "}
              <span className="text-[#6666FF]">e-naira’s </span>
              blockchain based platform
            </p>
            <p className="w-[90%] mt-8 text-xl leading-[32px] text-[#6B7280]">
              OffPro is a technology that makes petty cash exchange easier and
              better by serving as an intermediary for the transfer of Nigeria’s
              e-naira between two parties.
            </p>
          </div>
          <div className="basis-1/2">
            <div className="flex justify-end">
              <img className="w-11/12" src={AboutImage} alt="hero__image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHero