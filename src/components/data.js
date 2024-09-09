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
	title: "Hyödyt yritykselle",
	desc: "Täydellisen rekryn löytäminen on tärkeää, mutta PauPau:n avulla varmistat rekryprosessin kaikki hyödyt.",
	image: benefitOneImg,
	bullets: [
		{
			title: "Rekisteröityneet työnhakijat",
			desc: "Kun työnhakija ottaa PauPau:n käyttöön, tämä tunnistautuu.",
			icon: <FaceSmileIcon />,
		},

		{
			title: "Rekryprosessin toimivuus",
			desc: "Miellyttävämpi rekryprosessi sinulle ja työnhakijalle.",
			icon: <ChartBarSquareIcon />,
		},
		{
			title: "Palaute työnhakuprosessista",
			desc: "Palkittu työnhakija vastaa kyselyyn varmasti.",
			icon: <CursorArrowRaysIcon />,
		},
		{
			title: "Parempi työnantajakuva",
			desc: "Paranna yrityksesi työantajakuvaa myös heidän keskuudessaan, joita ei valittu tehtävään.",
			icon: <ChartBarSquareIcon />,
		},
	],
};

const benefitTwo = {
	title: "Hyödyt PauPau:n käytöstä työnhakijalle",
	desc: "Paras työnhakukokemus..",
	image: benefitTwoImg,
	bullets: [
		{
			title: "Luo uskottava työnhakijaprofiili",
			desc: "Rekisteröitymällä varmistat, että työnantaja huomaa motivaatiosi.",
			icon: <StarIcon />,
		},
		{
			title: "Arvostetut työnantajat",
			desc: "PauPau:n avulla löydät yritykset jotka arvostavat työnhakijoitaan vaikket tulisi valituksi tehtävään.",
			icon: <HandThumbUpIcon />,
		},
		{
			title: "Palkkio työhaastatteluun osallistumisesta",
			desc: "PauPau maksaa tilillesi palkkion osallistumisesta työhaastatteluun. Varmistat palkkiosi vastaamalla työantajan tyytyväisyyskyselyyn. ",
			icon: <TrophyIcon />,
		},
	],
};


export { benefitOne, benefitTwo };
