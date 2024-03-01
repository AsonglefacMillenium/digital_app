import ExpertiseSection from "@/components/templates/expects/indext";
import HomeLander from "@/components/templates/lander";
import VideoSection from "@/components/templates/video";
import React from "react";

const HomeScreen = () => {
  return (
    <div className="w-full m-0 p-0">
      <HomeLander />
      <VideoSection />
      <ExpertiseSection />
    </div>
  );
};

export default HomeScreen;
