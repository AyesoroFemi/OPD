import React from "react";
import Three from "../../../assets/three.svg";
import One from "../../../assets/one.svg";
import Two from "../../../assets/two.svg";
import Four from "../../../assets/four.svg";
import DummyMoney from "../../../assets/dummy_money.svg";

const values = [
  {
    id: 1,
    Img: Three,
    title: "Press the button on the right",
    content: "A pop prompt will appear on your mobile device",
  },
  {
    id: 2,
    Img: One,
    title: "Press the connect button on your mobile device",
    content: "Wait for it to connect. This might that few seconds",
  },
  {
    id: 3,
    Img: Two,
    title: "Once done, a pop-up will notify you of the connection",
    content: "Direct integration with ALATPay on your website/app",
  },
  {
    id: 4,
    Img: Four,
    title: "Start LOADING & DUMPING your e-naira",
    content: "Start receving payments instantly",
  },
];

function Connect() {
  return (
    <div className="bg-[#F9FBFE]  -translate-y-[150px] pt-[73px] lg:pt-[150px] pb-[99px] px-4">
      <div className="max-w-screen-xl mx-auto ">
        <div>
          <p className="text-[#6666FF] text-center lg:text-left font-Cabinet_Grotesk text-2xl lg:text-[36px]">
            How to connect to the OPD
          </p>
          <div className="grid lg:grid-cols-[50%_50%] gap-10">
            <div className="mt-[72px]">
              {values.map((value) => (
                <div key={value.id} className="flex gap-10 mb-6">
                  <div className="">
                    <img src={value.Img} alt="" />
                  </div>
                  <div>
                    <p className="font-Cabinet_Grotesk text-[#121212] text-xl lg:text-2xl">
                      {value.title}
                    </p>
                    <p className="pt-1">{value.content}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden lg:block pt-10">
              <img src={DummyMoney} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connect;
