import { Text } from "@/components/atoms";
import Image from "next/image";
import React from "react";


interface IExpertsCarpProp{
    name: string
    title: string
    image: string
}
const ExpertiseCard = ({...props}: IExpertsCarpProp) => {
  return (
    <div className="w-[280px] flex flex-col gap-4" {...props}>
      <div className="w-full h-fit">
        <Image
          src={props.image}
          alt=""
          width={200}
          height={200}
          className="w-full h-[400px]"
        />
      </div>

      <div className="w-full flex flex-col gap-2">
        <Text
          text={props.name}
          color="#fff"
          fontSize={"small"}
          fontWeight={"semiBold"}
        />

        <Text
          text={props.title}
          color="#829BBC"
          fontSize={"small"}
          fontWeight={"semiBold"}
        />
      </div>
    </div>
  );
};

export default ExpertiseCard;
