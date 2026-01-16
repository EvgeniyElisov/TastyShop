import clsx from "clsx";
import React from "react";

type TitleSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

type Props = {
  size?: TitleSize;
  className?: string;
  text: string;
};

export const Title = ({ text, size = "sm", className }: Props) => {
  const mapTagBySize = {
    xs: "h5",
    sm: "h4",
    md: "h3",
    lg: "h2",
    xl: "h1",
    "2xl": "h1",
  } as const;

  const mapClassNameBySize = {
    xs: "text-[18px]",
    sm: "text-[24px]",
    md: "text-[30px]",
    lg: "text-[38px]",
    xl: "text-[48px]",
    "2xl": "text-[56px]",
  } as const;

  return React.createElement(mapTagBySize[size], { className: clsx(mapClassNameBySize[size], className) }, text);
};
