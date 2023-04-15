import React from "react";
import Amazon from "../../../assets/amazon.svg";
import Apple from "../../../assets/apple.svg";
import Slack from "../../../assets/Slack.svg";
import Salesforce from "../../../assets/salesforce.svg";
import MailChimp from "../../../assets/mailchimp.svg";
import Microsoft from "../../../assets/microsoft.svg";
import Google from "../../../assets/Google1.svg";
import Spotify from "../../../assets/spotify.svg";

const items = [
  { id: 1, name: Google },
  { id: 2, name: Microsoft},
  { id: 3, name: Spotify },
  { id: 4, name: MailChimp },
  { id: 5, name: Amazon },
  { id: 6, name: Apple },
  { id: 7, name: Slack },
  { id: 8, name: Salesforce },
];

function Partners() {
  return (
    <div className="max-w-screen-lg mx-auto mt-[104px] mb-10 px-4">
      <p className="hidden lg:block text-center font-Cabinet_Grotesk text-[36px] text-[#6666FF]">
        Our Trusted Partners
      </p>
      <p className="text-center font-Cabinet_Grotesk mb-2 text-2xl lg:hidden">
        Integrations for every workflow
      </p>
      <p className="text-center lg:w-[54%] font-Grotesk text-base lg:text-xl text-[#6B7280] mx-auto">
        This will be a unique product designed to allow offline transactions
        using an offline-ledger blockchain approach.
      </p>
      <div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-[70px]">
          {items.map((item) => (
            <div
              key={item.id}
              className="rounded-md  flex justify-center bg-[#F3F4F6] px-[34px] py-[30px] "
            >
              <img src={item.name} alt={item.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Partners;
