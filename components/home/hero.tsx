import React from "react";
import Container from "../container";

function Subtitle({ title }: { title: string }) {
  return (
    <h2 className="text-2xl font-extrabold tracking-tight uppercase sm:text-3xl">
      {title}
    </h2>
  );
}

export default function Hero() {
  return (
    <Container>
      <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
        Piyush A. Sonar
      </h1>
      <Subtitle title="Software Engineer" />
      <Subtitle title="Pune, India" />
    </Container>
  );
}
