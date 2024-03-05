import { Text } from "@/components/atoms";
import { AnswerItem } from "@/components/molecules";
import React from "react";

const AnswerSection = () => {
  return (
    <div className="w-full bg-white flex flex-col mt-[100px]">
      <div className="w-full flex flex-col gap-16 mb-[100px]">
        <div className="flex items-center justify-center w-full flex-col gap-8">
          <Text
            text="Important answer"
            color="#001025"
            fontSize={"XXlarge"}
            fontWeight={"semiBold"}
          />

          <Text
            text="OUR PAST & OUR FUTURE"
            color="#BF9874"
            fontSize={"large"}
            fontWeight={"semiBold"}
          />
        </div>

        <div className="w-[70%] flex flex-col gap-8 mx-auto ">
          <AnswerItem />
          <AnswerItem />
          <AnswerItem />
          <AnswerItem />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="2"
            viewBox="0 0 1858 2"
            fill="none"
            className="w-full"
          >
            <path d="M-67 1L1858 1.00017" stroke="#BF9874" stroke-width="2" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AnswerSection;
