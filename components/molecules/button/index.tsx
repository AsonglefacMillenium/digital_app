"use client";

import { Text } from "@/components/atoms";

import React from "react";

const Button = ({ ...props }: IButtonProp) => {
  return (
    <button
      className="flex items-center p-[10px] justify-center "
      color={props.bgColor}
      style={{
        backgroundColor: props.bgColor,
        border: `1px solid ${props.border}`
      }}
      onClick={props.onClick}
    >
      

      <Text
        text={props.text}
        color={props.color}
        fontSize={"small"}
        fontWeight={"semiBold"}
      />
    </button>
  );
};

export default Button;
