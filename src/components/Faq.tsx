"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
	return (
		<Container className="!p-0">
			<div className="w-full  p-2 mx-auto mb-20 rounded-2xl">
				{faqdata.map((item, index) => (
					<div key={item.question} className="mb-5">
						<Disclosure>
							{({ open }) => (
								<>
									<DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
										<span>{item.question}</span>
										<ChevronUpIcon
											className={`${open ? "transform rotate-180" : ""
												} w-5 h-5 text-customLila`}
										/>
									</DisclosureButton>
									<DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
										{item.answer}
									</DisclosurePanel>
								</>
							)}
						</Disclosure>
					</div>
				))}
			</div>
		</Container>
	);
}

const faqdata = [
	{
		question: "Can I use my own suppliers?",
		answer: "Absolutely! We understand the importance of working with trusted partners. You can seamlessly add your own suppliers to the platform, allowing you to maintain your existing relationships while benefiting from our comprehensive supplier management tools.",
	},
	{
		question: "Can I update supplier information?",
		answer: "Yes, updating supplier information is not only possible but also designed to be user-friendly. Our platform allows you to easily modify details such as contact information, performance metrics, and service offerings, ensuring that you always have the most accurate and up-to-date information at your fingertips.",
	},
	{
		question: "Can my whole team join Kite?",
		answer: "Certainly! Kite is built for collaboration. You can invite your entire team to join the platform, enabling them to work together on RFx processes and supplier management. This fosters a more integrated approach to procurement, allowing for better communication, shared insights, and collective decision-making.",
	},
];


