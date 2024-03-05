import { Text } from "@/components/atoms";
import { Button, HeritageItem } from "@/components/molecules";
import Image from "next/image";
import React from "react";

const HeritageSection = () => {
  return (
    <div className="w-full flex flex-col bg-white py-20">
      <div className="w-full">
        <div className="w-[80%] mx-auto flex flex-col gap-16">
          <div className="w-full flex flex-col items-center justify-center gap-4">
            <Text
              text="OUR HERITAGE"
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

          <div className="w-full flex justify-between items-center mb-20">
            <HeritageItem
              text="Nisi iaculis aliquam tortor malesuada pellentesque."
              title="Founded in Hawaii"
              date="1996"
            />
            <HeritageItem
              text="Nisi iaculis aliquam tortor malesuada pellentesque."
              title="Founded in Hawaii"
              date="1972"
            />
            <HeritageItem
              text="Nisi iaculis aliquam tortor malesuada pellentesque."
              title="Founded in Hawaii"
              date="1968"
            />
            <HeritageItem
              text="Nisi iaculis aliquam tortor malesuada pellentesque."
              title="Founded in Hawaii"
              date="1998"
            />
            <HeritageItem
              text="Nisi iaculis aliquam tortor malesuada pellentesque."
              title="Founded in Hawaii"
              date="2003"
            />
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            
            height="2"
            viewBox="0 0 1858 2"
            fill="none"
            className="relative bottom-[300px]  w-full"
          >
            <path d="M-67 1L1858 1.00017" stroke="#BF9874" stroke-width="2" />
          </svg>
        </div>

        <div className="w-full">
          <Image
            src={"/images/heritage.png"}
            alt=""
            width={600}
            height={600}
            className="w-full h-"
          />
        </div>

        <div className="w-full ">
          <div className="w-[70%] flex justify-between items-center mx-auto mt-20">
            <div className="w-[40%] flex flex-col gap-2 ">
              <Text
                text="An interview With Jack Morgan McGills"
                color="#001025"
                fontSize={"mega"}
                fontWeight={"bold"}
              />

              <Text
                text="Eu elementum faucibus at consectetur suspendisse pellentesque duis."
                color="#808080"
                fontSize={"small"}
                fontWeight={"400"}
              />
            </div>
            <div className="">
              <Button text="FIND OUR MORE" color="#fff" bgColor="#001025" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeritageSection;
