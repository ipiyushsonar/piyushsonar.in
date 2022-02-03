import React from "react";
import NextLink from "next/link";
import classNames from "classnames";

interface Props {
  children: React.ReactNode;
  external?: boolean;
  href: string;
  underline?: boolean;
}

export default function Link(props: Props) {
  const { children, external = false, href, underline = true } = props;
  const className = classNames(
    "text-indigo-400 hover:text-indigo-500 focus:text-indigo-500",
    { underline }
  );

  if (external) {
    return (
      <a
        className={className}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink passHref href={href}>
      <a className={className}>{children}</a>
    </NextLink>
  );
}
