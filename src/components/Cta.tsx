import React from "react";
import { Container } from "@/components/Container";

export const Cta = () => {
	return (
		<Container>
			<div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-customLila px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
				<div className="flex-grow text-center lg:text-left">
					<h2 className="text-2xl font-medium lg:text-3xl">
						Want to know more about Kite?
					</h2>
					<p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
						Contact us now for a demo:
					</p>
				</div>
				<div className="flex-shrink-0 w-full text-center lg:w-auto">
					<a
						href="mailto:martin.jertz@gotokite.com"
						target="_blank"
						rel="noopener"
						className="inline-block py-3 mx-auto text-lg font-medium text-center text-customLila bg-white rounded-md px-7 lg:px-10 lg:py-5 "
					>
						Request a demo
					</a>
				</div>
			</div>
		</Container>
	);
};
