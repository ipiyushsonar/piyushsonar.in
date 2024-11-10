import React from "react";
import Container from "../container";
import Header from "../lib/header";
import Link from "../lib/link";
import Button from "../lib/button";
import { ExternalLinkIcon } from "@heroicons/react/outline";

export default function Footer() {
	return (
		<Container>
			<>
				<Header title='Contact' />
				<Header title='Links' />
				<div className='pb-10 flex flex-row gap-3'>
					<Link
						external
						href='https://www.github.com/ipiyushsonar'
						underline={false}
					>
						<Button icon={<ExternalLinkIcon width={20} />} text='GitHub' />
					</Link>
					<Link
						external
						href='https://twitter.com/ipiyushsonar'
						underline={false}
					>
						<Button icon={<ExternalLinkIcon width={20} />} text='Twitter' />
					</Link>
					<Link
						external
						href='https://www.linkedin.com/in/ipiyushsonar/'
						underline={false}
					>
						<Button icon={<ExternalLinkIcon width={20} />} text='LinkedIn' />
					</Link>
					<Link
						external
						href="https://fosstodon.org/@ipiyushsonar"
						underline={false}
					>
						<Button icon={<ExternalLinkIcon width={20} />} text='Mastodon' />
					</Link>
				</div>
			</>
		</Container>
	);
}
