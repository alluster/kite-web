import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/hero.png";

export const Hero = () => {
	return (

		<Container className="flex flex-wrap min-h-48  justify-center lg:text-left ">
			<div className="flex w-full lg:w-1/3">
				<div className="max-w-2xl mb-8">
					<h1 className="text-4xl  font-medium font-sans tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
						Supplier Management for Modern Procurement
					</h1>
					<p className="py-5 text-md leading-normal text-gray-500 lg:text-md xl:text-2xl dark:text-gray-300">
						Empower procurement with a centralized, data-driven platform.
					</p>

					<div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
						<div className="flex-1">
							<a
								href="mailto:martin.jertz@gotokite.com"
								target="_blank"
								rel="noopener"
								className="block w-full px-4 py-2 text-lg font-medium text-center text-white bg-customLila rounded-md whitespace-nowrap">
								Contact for a demo
							</a>

						</div>

						<div className="flex-1">
							<a
								href="#features"
								rel="noopener"
								className="dark:bg-white dark:text-black block w-full px-4 py-2 text-lg font-medium text-center bg-transparent border border-customLila rounded-md hover:bg-customLila hover:text-white transition duration-200 whitespace-nowrap overflow-hidden overflow-ellipsis">
								Learn more
							</a>
						</div>
					</div>

				</div>
			</div>
			<div className="flex items-center justify-center w-full lg:w-2/3">
				<div className="">
					<Image
						src={heroImg}
						width="1000"
						height="1000"
						className={"object-cover"}
						alt="Hero Illustration"
						loading="eager"
					/>
				</div>
			</div>
		</Container >

	)
}