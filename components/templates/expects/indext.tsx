import { Text } from "@/components/atoms";
import React from "react";

const ExpertiseSection = () => {
  return (
    <div className="w-full py-20 flex flex-col gap-16 bg-[#001025]">
      <div className="w-[80%] mx-auto flex flex-col gap-4">
        <Text text="OUR PAST & OUR FUTURE" color="#BF9874" fontSize={"large"} fontWeight={"semiBold"} />
        <Text text="OUR BEST EXPERTS" color="#fff" fontSize={"XXlarge"} fontWeight={"semiBold"} />
      </div>

      <div className="w-[80%] margin-auto flex justify-between">

      </div>
    </div>
  );
};

export default ExpertiseSection;
