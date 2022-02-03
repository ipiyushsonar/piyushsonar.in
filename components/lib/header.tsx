import classNames from "classnames";
import React from "react";

interface Props {
  className?: string;
  title: string;
}

export default function Header(props: Props) {
  const { className, title } = props;

  return (
    <h3
      className={classNames(className, "mb-4 font-medium text-white text-2xl")}
    >
      {title}
    </h3>
  );
}
