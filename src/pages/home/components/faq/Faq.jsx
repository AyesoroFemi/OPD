import React, { useState } from "react";

import SingleQuestion from "./SingleQuestion";

const data = [
  {
    id: 1,
    title: "Can I use FlowBite in open-source projects?",
    info: (
      <>
        <p>
          Generally, it is accepted to use FlowBite in open-source projects, as
          long as it is not a UI library, a theme, a template, a page-builder
          that would be considered as an alternative to FlowBite itself.
        </p>
        <p className="pt-2">
          With that being said, feel free to use this design kit for your
          open-source projects.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Where can I access my download files?",
    info: (
      <>
        {" "}
        <p>
          Generally, it is accepted to use FlowBite in open-source projects, as
          long as it is not a UI library, a theme, a template, a page-builder
          that would be considered as an alternative to FlowBite itself.
        </p>
        <p className="pt-2">
          With that being said, feel free to use this design kit for your
          open-source projects.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "Can I use FlowBite for commercial purposes?",
    info: (
      <>
        {" "}
        <p>
          Generally, it is accepted to use FlowBite in open-source projects, as
          long as it is not a UI library, a theme, a template, a page-builder
          that would be considered as an alternative to FlowBite itself.
        </p>
        <p className="pt-2">
          With that being said, feel free to use this design kit for your
          open-source projects.
        </p>
      </>
    ),
  },
  {
    id: 4,
    title: "Where can I access my download files?",
    info: (
      <>
        {" "}
        <p>
          Generally, it is accepted to use FlowBite in open-source projects, as
          long as it is not a UI library, a theme, a template, a page-builder
          that would be considered as an alternative to FlowBite itself.
        </p>
        <p className="pt-2">
          With that being said, feel free to use this design kit for your
          open-source projects.
        </p>
      </>
    ),
  },
  {
    id: 5,
    title: "Can I use FlowBite for commercial purposes?",
    info: (
      <>
        {" "}
        <p>
          Generally, it is accepted to use FlowBite in open-source projects, as
          long as it is not a UI library, a theme, a template, a page-builder
          that would be considered as an alternative to FlowBite itself.
        </p>
        <p className="pt-2">
          With that being said, feel free to use this design kit for your
          open-source projects.
        </p>
      </>
    ),
  },
  {
    id: 6,
    title: "Where can I access my download files?",
    info: (
      <>
        {" "}
        <p>
          Generally, it is accepted to use FlowBite in open-source projects, as
          long as it is not a UI library, a theme, a template, a page-builder
          that would be considered as an alternative to FlowBite itself.
        </p>
        <p className="pt-2">
          With that being said, feel free to use this design kit for your
          open-source projects.
        </p>
      </>
    ),
  },
  {
    id: 7,
    title: "Can I use FlowBite for commercial purposes?",
    info: (
      <>
        {" "}
        <p>
          Generally, it is accepted to use FlowBite in open-source projects, as
          long as it is not a UI library, a theme, a template, a page-builder
          that would be considered as an alternative to FlowBite itself.
        </p>
        <p className="pt-2">
          With that being said, feel free to use this design kit for your
          open-source projects.
        </p>
      </>
    ),
  },
  {
    id: 8,
    title: "What about browser support?",
    info: (
      <>
        {" "}
        <p>
          Generally, it is accepted to use FlowBite in open-source projects, as
          long as it is not a UI library, a theme, a template, a page-builder
          that would be considered as an alternative to FlowBite itself.
        </p>
        <p className="pt-2">
          With that being said, feel free to use this design kit for your
          open-source projects.
        </p>
      </>
    ),
  },
];

function Faq() {
  const [questions] = useState(data);
  return (
    <div className="max-w-screen-lg mx-auto -translate-y-6  lg:-translate-y-20 px-4 lg:px-0">
      <p className="text-[#6666FF] text-2xl lg:text-[36px] font-Cabinet_Grotesk text-center">
        Frequently asked question
      </p>
      <div className="flex flex-wrap gap-2 lg:gap-8 translate-y-[36px] text-[#6B7280]">
        <span className="hover:bg-[#6666FF] rounded-3xl px-4 hover:text-white py-1 text-sm ">
          All
        </span>
        <span className="hover:bg-[#6666FF] rounded-3xl px-4 hover:text-white py-1 text-sm ">
          Dump
        </span>
        <span className="bg-[#6666FF] rounded-3xl px-4 text-white py-1 text-sm">
          Load
        </span>
        <span className="hover:bg-[#6666FF] rounded-3xl px-4 hover:text-white py-1 text-sm ">
          Connect
        </span>
        <span className="hover:bg-[#6666FF] rounded-3xl px-4 hover:text-white py-1 text-sm ">
          Security
        </span>
        <span className="hover:bg-[#6666FF] rounded-3xl px-4 hover:text-white py-1 text-sm ">
          Policy
        </span>
        <span className="hover:bg-[#6666FF] rounded-3xl px-4 hover:text-white py-1 text-sm ">
          Terms & Condition
        </span>
      </div>
      <main>
        <div className="px-3 mx-auto pb-20 md:py-20 mt-16 lg:mt-2">
          <section className="">
            {questions.map((question) => {
              return (
                <SingleQuestion
                  key={question.id}
                  {...question}
                ></SingleQuestion>
              );
            })}
          </section>
        </div>
      </main>
    </div>
  );
}

export default Faq;
