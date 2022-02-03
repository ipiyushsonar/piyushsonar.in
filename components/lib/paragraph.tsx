import classNames from "classnames";
import React from "react";

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export default function Paragraph(props: ParagraphProps) {
  const { children, className } = props;

  return <p className={classNames(className, "mb-5")}>{children}</p>;
}
