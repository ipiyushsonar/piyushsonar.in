import React from "react";
import Container from "../container";
import Header from "../lib/header";
import Paragraph from "../lib/paragraph";

export default function About() {
  return (
    <Container>
      <>
        <Header title="About" />
        <Paragraph>
          Hi, I&apos;m Piyush - software engineer and open source enthusiast. When
          I&apos;m not coding, you&apos;ll find me playing tennis or reading
          too many types of books.
        </Paragraph>
      </>
    </Container>
  );
}
