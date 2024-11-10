import React from "react";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import Container from "../container";
import Header from "../lib/header";
import Paragraph from "../lib/paragraph";
import Link from "../lib/link";
import Button from "../lib/button";

interface LinkProps {
	text: string;
	url: string;
}

function ProjectLink(props: LinkProps) {
	const { text, url } = props;

	return (
		<Link external href={url} underline={false}>
			<Button icon={<ExternalLinkIcon width={20} />} text={text} />
		</Link>
	);
}

interface ProjectProps {
	description: string;
	image: string;
	links: [string, string][];
	title: string;
}

function Project(props: ProjectProps) {
	const { description, image, links, title } = props;

	return (
		<div className="flex flex-col">
			<div className="flex space-x-2">
				<Header title={title} className="mb-2 grow" />
				{links.map(([text, url]) => (
					<ProjectLink text={text} url={url} key={url} />
				))}
			</div>
			<Paragraph className="mb-3">{description}</Paragraph>
			<div className="flex items-center justify-center w-full p-4 mb-8 rounded-lg project-backdrop sm:p-8">
				<img
					className="max-h-full rounded shadow-lg sm:rounded-lg shadow-yellow-900"
					alt=""
					src={`https://raw.githubusercontent.com/ipiyushsonar/piyushsonar.in/main/public/projects/${image}`}
				/>
			</div>
		</div>
	);
}

export default function Projects() {
	return (
		<Container>
			<>
				<Header title='Projects' />
				<Project
					title='Wikitrivia'
					description=' Wikidata as a trivia card game.'
					image='wikitrivia.png'
					links={[
						['Website', 'https://wikitrivia.tomjwatson.com/'],
						['Source', 'https://github.com/ipiyushsonar/wikitrivia'],
					]}
				/>
				{/* <Project
					title='BreakTimer'
					description='Cross-platform application for managing periodic breaks.'
					image='breaktimer.png'
					links={[
						['Website', 'https://breaktimer.app'],
						['Source', 'https://github.com/tom-james-watson/breaktimer-app'],
					]}
				/> */}
				<Project
					title='p2p.chat'
					description='P2P video conferencing powered by WebRTC.'
					image='p2p-chat.png'
					links={[
						['Website', 'https://p2p.chat'],
						['Source', 'https://github.com/ipiyushsonar/p2p.chat'],
					]}
				/>
				{/* <Project
					title='Emote'
					description='Emoji Picker for Linux written in GTK3.'
					image='emote.png'
					links={[['Source', 'https://github.com/tom-james-watson/emote']]}
				/> */}
				<Project
					title='detoxed.news'
					description='The important news, without the toxicity.'
					image='detoxed-news.png'
					links={[
						['Website', 'https://detoxed.news'],
						['Source', 'https://github.com/ipiyushsonar/detoxed.news'],
					]}
				/>
				{/* <Project
					title='Waystops'
					description="The backpacker's guidemap."
					image='waystops.png'
					links={[['Website', 'https://waystops.com']]}
				/>
				<Project
					title='WebTorrent Protocol'
					description='Proof-of-concept distributed web powered by WebTorrents.'
					image='wtp-ext.png'
					links={[['Source', 'https://github.com/tom-james-watson/wtp-ext']]}
				/>
				<Project
					title='dcp'
					description='Remote file copy, powered by the Dat protocol.'
					image='dcp.png'
					links={[['Source', 'https://github.com/tom-james-watson/dat-cp']]}
				/>
				<Project
					title='Old Reddit Redirect'
					description='Ensure Reddit always loads the old design.'
					image='old-reddit-redirect.png'
					links={[
						[
							'Source',
							'https://github.com/tom-james-watson/old-reddit-redirect',
						],
					]}
				/>
				<Project
					title='Reddit Comment Collapser'
					description='A more elegant solution for collapsing reddit comment trees.'
					image='reddit-comment-collapser.png'
					links={[
						[
							'Source',
							'https://github.com/tom-james-watson/reddit-comment-collapser',
						],
					]}
				/> */}
			</>
		</Container>
	);
}
