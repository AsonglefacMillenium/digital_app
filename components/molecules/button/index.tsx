"use client";

import { Text } from "@/components/atoms";

import React from "react";

const Button = ({ ...props }: IButtonProp) => {
  return (
    <button
      className="flex items-center p-[10px] rounded-2xl gap-[10px] "
      color={props.bgColor}
      style={{
        backgroundColor: props.bgColor,
      }}
      onClick={props.onClick}
    >
      

      <Text
        text={props.text}
        color={props.color}
        fontSize={"small"}
        fontWeight={"bold"}
      />
    </button>
  );
};

export default Button;
