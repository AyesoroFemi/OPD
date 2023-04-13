import Arrow from "../assets/arrow.svg";
import GooglePlay from "../assets/download.svg";
import AppleStore from "../assets/download_btn.svg";
import HeroImage from "../assets/hero.svg";
import Airbnb from "../assets/airnb.svg";
import Google from "../assets/google.svg";
import Nike from "../assets/nike.svg";
import Uber from "../assets/uber.svg";
import Stripe from "../assets/stripe.svg";
import Mashable from "../assets/mashable.svg";

function Hero() {
  return (
    <div className="max-w-screen-xl mx-auto mt-[102px] font-Grotesk">
      <div className="flex">
        <div className="basis-1/2">
          <div className="flex items-center w-[62%] rounded-3xl bg-[#F0F0FF]">
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
          </div>
          <p className="font-Cabinet_Grotesk text-[#1A1A1A] mt-4 text-[72px] leading-[77px]">
            A technology that makes petty{" "}
            <span className="text-[#6666FF]">cash exchange easier</span>
          </p>
          <p className="w-[90%] mt-8 text-xl leading-[32px] text-[#6B7280]">
            OffPro is a technology that makes petty cash exchange easier and
            better by serving as an intermediary for the transfer of Nigeria’s
            e-naira between two parties.
          </p>
          <div className="flex mt-14 gap-4">
            <img src={GooglePlay} alt="Google__pay" />
            <img src={AppleStore} alt="" />
          </div>
        </div>
        <div className="basis-1/2">
          <img src={HeroImage} alt="hero__image" />
        </div>
      </div>
      <div className="flex justify-between mt-[135px] w-11/12">
        <img src={Airbnb} alt="airbnb__logo" />
        <img src={Google} alt="google__logo" />
        <img src={Nike} alt="google__logo" />
        <img src={Uber} alt="google__logo" />
        <img src={Stripe} alt="google__logo" />
        <img src={Mashable} alt="google__logo" />
      </div>
    </div>
  );
}

export default Hero;
