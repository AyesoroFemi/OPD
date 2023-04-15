import React from 'react'
import AboutImage from "../../../assets/about-img.svg";
import Arrow from "../../../assets/arrow.svg";



function AboutHero() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto mt-[102px] font-Grotesk px-2">
        <div className="lg:flex lg:gap-5">
          <div className="basis-1/2">
            <p className="hidden lg:block text-2xl font-Cabinet_Grotesk text-[#808080] #808080">
              About Us
            </p>
            <div className="flex items-center md:w-[50%] lg:w-[64%] rounded-3xl bg-[#F0F0FF] lg:hidden">
              <span className="font-[500] bg-[#6666FF] mr-4 text-white rounded-[45px] py-1 px-3 text-sm ml-1 my-1 ">
                New
              </span>
              <span className="text-[15px] lg:text-base font-[500]">
                Learn how to setup your e-naira wallet
              </span>
              <img
                className="ml-2 lg:ml-6 lg:h-[20px] lg:w-[20px]"
                src={Arrow}
                alt="forward_arrow"
              />
            </div>
            
            <p className="text-center lg:text-left font-Cabinet_Grotesk text-[#1A1A1A] mt-4 text-[40px] lg:text-[68px] leading-[44.2px] lg:leading-[77px]">
              Leveraging the <br />{" "}
              <span className="text-[#6666FF]">e-naira’s </span>
              blockchain based platform
            </p>
            <p className="w-[90%] mx-auto lg:mx-0 lg:w-[90%] text-center lg:text-left mt-8 text-base leading-[24px] lg:text-xl lg:leading-[32px] text-[#6B7280]">
              OffPro is a technology that makes petty cash exchange easier and
              better by serving as an intermediary for the transfer of Nigeria’s
              e-naira between two parties.
            </p>
          </div>
          <div className="basis-1/2">
            <div className="flex mt-[57px] lg:justify-end">
              <img className="w-11/12" src={AboutImage} alt="hero__image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHero