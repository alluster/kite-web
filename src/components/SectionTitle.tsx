import React from "react";
import { Container } from "@/components/Container";

interface SectionTitleProps {
	preTitle?: string;
	title?: string;
	subTitle?: string;
	paragraph?: string;
	align?: "left" | "center";
	children?: React.ReactNode;
	id?: string;
}

export const SectionTitle = (props: Readonly<SectionTitleProps>) => {
	return (
		<Container

			className={` justify-left flex w-full flex-col mt-4 ${props.align === "left" ? "" : "items-left justify-left text-left"
				}`}>
			{props.preTitle && (
				<div className="text-sm font-bold tracking-wider text-customLila dark:text-white uppercase">
					{props.preTitle}
				</div>
			)}

			{props.title && (
				<h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-5xl dark:text-white">
					{props.title}
				</h2>
			)}
			{props.subTitle && (
				<h2 className="max-w-2xl mt-3 text-xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-3xl dark:text-white">
					{props.subTitle}
				</h2>
			)}
			{props.paragraph && (
				<p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-lg dark:text-gray-300">
					{props.paragraph}
				</p>
			)}
		</Container>
	);
}

