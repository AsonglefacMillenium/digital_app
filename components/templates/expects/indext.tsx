import { Text } from "@/components/atoms";
import ExpertiseCard from "@/components/organisms/expertiseCard";
import React from "react";

const ExpertiseSection = () => {
  return (
    <div className="w-full py-20 flex flex-col gap-16 bg-[#001025]">
      <div className="w-[80%] mx-auto flex flex-col gap-4">
        <Text
          text="OUR PAST & OUR FUTURE"
          color="#BF9874"
          fontSize={"large"}
          fontWeight={"semiBold"}
        />
        <Text
          text="OUR BEST EXPERTS"
          color="#fff"
          fontSize={"XXlarge"}
          fontWeight={"semiBold"}
        />
      </div>

      <div className="w-[80%] mx-auto flex justify-between">
        <ExpertiseCard
          image="/images/team1.png"
          title="Attorney & Parnet"
          name="Anne Hamlin"
        />
        <ExpertiseCard
          image="/images/team.png"
          title="Attorney & Parnet"
          name="Jack M. McGill"
        />
        <ExpertiseCard
          image="/images/team2.png"
          title="Attorney & Parnet"
          name="Athony Nguyen"
        />
        <ExpertiseCard
          image="/images/team3.png"
          title="Attorney & Parnet"
          name="Kim Wexler"
        />
      </div>
    </div>
  );
};

export default ExpertiseSection;
