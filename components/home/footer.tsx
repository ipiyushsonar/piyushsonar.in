import React from "react";
import Container from "../container";
import Header from "../lib/header";
import Paragraph from "../lib/paragraph";
import Link from "../lib/link";
import Button from "../lib/button";
import { ExternalLinkIcon } from "@heroicons/react/outline";

export default function Footer() {
  return (
		<Container>
			<>
				<Header title='Contact' />
				<Header title='Links' />
				<Paragraph>
					<Link
						external
						href='https://www.github.com/ipiyushsonar'
						underline={false}
					>
						<Button icon={<ExternalLinkIcon width={20} />} text='GitHub' />
					</Link>
				</Paragraph>
				<Paragraph>
					<Link
						external
						href='https://twitter.com/ipiyushsonar'
						underline={false}
					>
						<Button icon={<ExternalLinkIcon width={20} />} text='Twitter' />
					</Link>
				</Paragraph>
				<Paragraph>
					<Link
						external
						href='https://www.linkedin.com/in/ipiyushsonar/'
						underline={false}
					>
						<Button icon={<ExternalLinkIcon width={20} />} text='LinkedIn' />
					</Link>
				</Paragraph>
			</>
		</Container>
	);
}
