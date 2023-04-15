import React from "react";
import Image_one from "../../../assets/img1.png";
import Image_two from "../../../assets/img2.png";
import Image_three from "../../../assets/img3.png";
import Image_four from "../../../assets/img4.png";
import Image_five from "../../../assets/img5.png";
import Image_six from "../../../assets/img6.png";
import Image_seven from "../../../assets/img7.png";
import Image_eight from "../../../assets/img8.png";

const avatars = [
  {
    id: 1,
    image: Image_one,
    name: "Bonnie Green",
    portfolio: "Senior Front-end Developer",
  },
  {
    id: 2,
    image: Image_two,
    name: "Micheal Gough",
    portfolio: "Front-end Developer",
  },
  {
    id: 3,
    image: Image_three,
    name: "Helene Engels",
    portfolio: "Designer",
  },
  {
    id: 4,
    image: Image_four,
    name: "Neil Sims",
    portfolio: "CEO & React Developer",
  },
  {
    id: 5,
    image: Image_five,
    name: "Roberta Casas",
    portfolio: "SEO Specialist",
  },
  {
    id: 6,
    image: Image_six,
    name: "Joseph McFall",
    portfolio: "Backend Developer",
  },
  {
    id: 7,
    image: Image_seven,
    name: "Karen Nelson",
    portfolio: "Designer",
  },
  {
    id: 8,
    image: Image_eight,
    name: "Jese Leos",
    portfolio: "Logo Designer",
  },
];

function Team() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <p className="text-center font-Cabinet_Grotesk mt-20 text-[36px] text-[#111928] lg:text-[#6666FF]">
          Our team
        </p>
        <p className="text-center w-[90%] lg:w-[52%] font-Grotesk text-base lg:text-xl text-[#6B7280] mx-auto">
          Explore the whole collection of open-source web components and
          elements built with the utility classes from Tailwind
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 lg:gap-6 mt-[52px]">
          {avatars.map((avatar) => (
            <div className="flex flex-col items-center my-8">
              <img src={avatar.image} alt="" />
              <div className="text-center">
                <p className="pt-3 text-xl font-Cabinet_Grotesk">
                  {avatar.name}
                </p>
                <p className="text-[#6B7280] font-Grotesk">
                  {avatar.portfolio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
