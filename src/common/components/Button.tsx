import React from "react";

interface buttonProps {
  title: string;
  className: string;
  icon?: any;
}

export default function Button(props: buttonProps) {
  return (
    <button className={props.className}>
      {props?.title}
      {props?.icon}
    </button>
  );
}
