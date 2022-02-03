import React from "react";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  color?: "indigo" | "slate" | "red";
  icon?: React.ReactElement;
  text?: string;
}

export default function Button(props: Props) {
  const { icon, text, ...rest } = props;

  return (
    <button
      type="button"
      className="flex flex-row space-x-1 items-center justify-center rounded-md p-1 px-2 text-white focus:outline focus:outline-yellow-500 relative bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700"
      {...rest}
    >
      <span>{text}</span>
      {icon && icon}
    </button>
  );
}
