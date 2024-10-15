import {
	StarIcon,
	HandThumbUpIcon,
	TrophyIcon,
	FaceSmileIcon,
	ChartBarSquareIcon,
	CursorArrowRaysIcon,
	DevicePhoneMobileIcon,
	AdjustmentsHorizontalIcon,
	SunIcon,
	CheckCircleIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";
import benefitThreeImg from "../../public/img/benefit-three.png";

const benefitOne = {
	title: "Centralized Supplier Data Management",
	desc: "All Your Supplier Data, In One Place: Eliminate inefficiencies with a single source of truth for supplier management",
	image: benefitOneImg,
	bullets: [
		{
			title: "Unified supplier profiles",
			desc: "Centralize all supplier data—contacts, performance, contracts, and history—into one view, simplifying management and decision-making.",
			icon: <CheckCircleIcon />,
		},

		{
			title: "Easy access to compliance and contract data",
			desc: "Ensure that procurement teams can quickly retrieve essential documents and track supplier adherence to regulations, reducing risks and improving contract management efficiency.",
			icon: <CheckCircleIcon />,
		},
		{
			title: "Enhanced supplier relationship management",
			desc: "Optimize communication, collaboration, and performance tracking, fostering stronger partnerships and improving long-term value from suppliers.",
			icon: <CheckCircleIcon />,
		},

	],
};

const benefitTwo = {
	title: "Simplifying and Optimizing the RFx Process",
	desc: "Optimized RFx for Faster Decision-Making: Transform RFx processes to maximize cost savings and efficiency.",
	image: benefitTwoImg,
	bullets: [
		{
			title: "Multi-RFx management",
			desc: "handle multiple RFx processes simultaneously, streamline sourcing activities, improve efficiency, and ensure better comparison and decision-making across various suppliers and projects.",
			icon: <CheckCircleIcon />,
		},
		{
			title: "Automated follow-ups",
			desc: "Streamline communication by automatically sending reminders and updates to suppliers, ensuring timely responses and keeping procurement processes on track without manual intervention.",
			icon: <CheckCircleIcon />,
		},
		{
			title: "Supplier comparison and analysis tools",
			desc: "Enable procurement teams to evaluate suppliers based on key criteria like pricing, performance, and compliance, making it easier to compare options and make data-driven sourcing decisions.",
			icon: <CheckCircleIcon />,
		},
	],
};
const benefitThree = {
	title: "Intelligent Supplier Insights & Compliance Management",
	desc: "Proactive Supplier Compliance and Insights: Leverage AI-powered insights to mitigate risks and enhance supplier performance.",
	image: benefitThreeImg,
	bullets: [
		{
			title: "Real-time compliance tracking",
			desc: "Monitor business operations to ensure adherence to laws and regulations, enabling proactive risk management and improving efficiency through automated processes and alerts.",
			icon: <CheckCircleIcon />,
		},
		{
			title: "AI-powered risk assessment",
			desc: "AI-powered risk assessment utilizes advanced algorithms and machine learning techniques to analyze data, identify potential risks, and provide actionable insights, enhancing decision-making and improving overall risk management.",
			icon: <CheckCircleIcon />,
		},
		{
			title: "Supplier performance reviews",
			desc: "Supplier performance reviews involve systematically evaluating a supplier's effectiveness and reliability through metrics like quality, delivery, and service, ensuring alignment with business objectives and continuous improvement in the supply chain.",
			icon: <CheckCircleIcon />,
		},
	],
};

export { benefitOne, benefitTwo, benefitThree };
