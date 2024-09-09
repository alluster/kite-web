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
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
	title: "Ipsum lorem doloris maximus",
	desc: "Ipsum lorem doloris maximus",
	image: benefitOneImg,
	bullets: [
		{
			title: "Ipsum lorem doloris maximus",
			desc: "Ipsum lorem doloris maximus",
			icon: <FaceSmileIcon />,
		},

		{
			title: "Ipsum lorem doloris maximus",
			desc: "Ipsum lorem doloris maximus",
			icon: <ChartBarSquareIcon />,
		},
		{
			title: "Ipsum lorem doloris maximus",
			desc: "Ipsum lorem doloris maximus",
			icon: <CursorArrowRaysIcon />,
		},
		{
			title: "Ipsum lorem doloris maximus",
			desc: "Ipsum lorem doloris maximus",
			icon: <ChartBarSquareIcon />,
		},
	],
};

const benefitTwo = {
	title: "Ipsum lorem doloris maximus",
	desc: "Ipsum lorem doloris maximus",
	image: benefitTwoImg,
	bullets: [
		{
			title: "Ipsum lorem doloris maximus",
			desc: "Ipsum lorem doloris maximus",
			icon: <StarIcon />,
		},
		{
			title: "Ipsum lorem doloris maximus",
			desc: "Ipsum lorem doloris maximus",
			icon: <HandThumbUpIcon />,
		},
		{
			title: "Ipsum lorem doloris maximus",
			desc: "Ipsum lorem doloris maximus",
			icon: <TrophyIcon />,
		},
	],
};


export { benefitOne, benefitTwo };
