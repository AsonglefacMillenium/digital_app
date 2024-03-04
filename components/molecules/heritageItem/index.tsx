import { Text } from "@/components/atoms";
import React from "react";

interface HertageItemsProps{
    title: string
    text: string
    date: string
}

const HeritageItem = ({...props}: HertageItemsProps) => {
  return (
    <div className="w-[211px] h-[288px] flex flex-col justify-between" {...props}>
      <div className="w-full flex flex-col">
        <Text
          text={props.title}
          color="#001025"
          fontSize={"large"}
          fontWeight={"semiBold"}
        />

        <Text
          text={props.text}
          color="#808080"
          fontSize={"small"}
          fontWeight={"400"}
        />
      </div>

      <div className="w-full">
      <Text
          text={props.date}
          color="#BF9874"
          fontSize={"XXlarge"}
          fontWeight={"semiBold"}
        />
      </div>
    </div>
  );
};

export default HeritageItem;
