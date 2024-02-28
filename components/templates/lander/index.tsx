import { Text } from "@/components/atoms";
import { Button, PartnerCard } from "@/components/molecules";
import React from "react";
import "./styles.css";
import { SquareIcon, SquareSingleIcon } from "@/components/atoms/text/icons";

const HomeLander = () => {
  return (
    <div className="w-full lander h-[80vh] mb-[100px]">
      <div className="w-[80%] mx-auto h-full flex flex-col justify-center gap-[100px]">
        <div className="w-[50%] flex flex-col gap-4 ">
          <Text
            text="HOME OF LAW & ORDER"
            fontSize={"large"}
            fontWeight={"400"}
            color="#BF9874"
          />

          <Text
            text="EXPERTS OF JUSTICE"
            fontSize={"XXlarge"}
            fontWeight={"semiBold"}
            color="#ffffff"
          />

          <div className="w-[60%]">
            <Text
              text="Diam leo vitae tortor mauris faucibus odio nullam enim. At dolor pellentesque eget et purus. Purus mauris eget maecenas placerat vehicula tortor massa."
              fontSize={"small"}
              fontWeight={"400"}
              color="#ffffff"
            />
          </div>
        </div>

        <div className="">
          <Button text="FIND OUT MORE" bgColor="#BF9874" color="#ffffff" />
        </div>

        <div className="flex gap-4 mt-[40px]">
          <SquareIcon />
          <SquareSingleIcon />
          <SquareSingleIcon />
        </div>
      </div>
      <div className="w-full h-[196px] bg-[#EAF1FA] flex justify-center items-center gap-32">
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
      </div>
    </div>
  );
};

export default HomeLander;
