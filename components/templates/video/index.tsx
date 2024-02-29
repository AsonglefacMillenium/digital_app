import React from "react";
import "./styles.css";
import Image from "next/image";

const VideoSection = () => {
  return (
    <div className="video w-[80%] mx-auto h-fit py-20  flex items-center justify-center mt-[20rem] mb-[100px] block">
      <div className="w-[60%] mx-auto h-full flex">
        <img src={"/images/video.png"} alt=""  className="w-full h-[500px] block" />
      </div>
    </div>
  );
};

export default VideoSection;
