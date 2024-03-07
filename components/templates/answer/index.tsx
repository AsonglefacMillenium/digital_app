import { Text } from "@/components/atoms";
import { AnswerItem, Button } from "@/components/molecules";
import Image from "next/image";
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

      <div className="w-full flex justify-between bg-[#EAF1FA]">
        <div className="w-[30%]">
          <Image
            src={"/images/team.png"}
            alt=""
            width={600}
            height={600}
            className="w-full"
          />
        </div>

        <div className="w-[60%]   py-20">
          <div className="w-[80%] mx-auto flex flex-col gap-12 px-10">
            <div className=" flex flex-col gap-4">
              <Text
                text="Jack Morgan McGills"
                color="#001025"
                fontSize={"XXlarge"}
                fontWeight={"semiBold"}
              />

              <Text
                text="Senior Attorney & Owner of Victoria Law OfficeE"
                color="#001025"
                fontSize={"large"}
                fontWeight={"semiBold"}
              />
            </div>
            <Text
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu"
              color="#001025"
              fontSize={"normal"}
              fontWeight={"semiBold"}
            />

            <div className="flex gap-16">
              <div className="">
                <Image
                  src={"/images/logo1.png"}
                  alt="logo image"
                  width={80}
                  height={80}
                  className="block"
                />
              </div>

              <div className="">
                <Image
                  src={"/images/logo1.png"}
                  alt="logo image"
                  width={80}
                  height={80}
                  className="block"
                />
              </div>
            </div>

            <div className="">
              <Button
                text="REQUEST AN APPOINTMENT"
                color="#001025"
                bgColor="transparent"
                border="#001025"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnswerSection;
