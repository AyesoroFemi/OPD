import React from "react";

function Card({ Img, title, content }) {
  return (
    <div className="rounded-lg shadow-md p-6 basis-1/2">
      <img src={Img} alt="phone-screen" />
      <p className="text-lg font-Cabinet_Grotesk mt-5">{title}</p>
      <p className="text-[#6B7280] mt-2">{content}</p>
    </div>
  );
}

export default Card;
