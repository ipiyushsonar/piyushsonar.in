import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function Container(props: Props) {
  const { children } = props;

  return (
    <section className="my-16 mx-4 sm:mx-20">
      <div className="max-w-screen-md m-auto">{children}</div>
    </section>
  );
}
