"use client"
import { Text } from "@/components/atoms";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const AnswerItem = () => {
  const [item, setItem] = useState(false);
  return (
    <div className="w-full flex flex-col gap-8 hover:cursor-pointer" onClick={() => setItem(!item)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="2"
        viewBox="0 0 1858 2"
        fill="none"
        className="w-full"
      >
        <path d="M-67 1L1858 1.00017" stroke="#BF9874" stroke-width="2" />
      </svg>
      <div className="w-full flex flex-col gap-8 items-center">
        <div className="w-full flex justify-between">
          <div className="w-[90%] flex justify-center">
            <Text
              text="How can we help you?"
              color="#001025"
              fontSize={"large"}
              fontWeight={"semiBold"}
            />
          </div>

          <MdOutlineKeyboardArrowDown className="text-3xl" />
        </div>
        {item && (
          <div className="w-full px-10">
            <Text
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu"
              color="#808080"
              fontSize={"small"}
              fontWeight={"400"}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AnswerItem;
