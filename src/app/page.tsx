import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo, benefitThree } from "@/components/data";
export default function Home() {
	return (
		<Container>
			<Hero />
			<div style={{ borderTop: "solid white 1px", maxWidth: "600px", marginLeft: "auto", marginRight: "auto", marginTop: "60px" }}></div>
			<div id="vision"></div>
			<SectionTitle
				id="vision"
				preTitle="Vision"
				title="Our Vision"
				subTitle="We aim to streamline supplier management and RFx processes."
				paragraph="By automating manual tasks and centralizing data, we allow procurement teams to focus on strategic activities rather than administrative burdens. By offering real-time collaboration, intelligent sourcing, and analytics-driven insights, we empower procurement professionals to make smarter, faster decisions. "
			/>
			<div style={{ borderTop: "solid white 1px", maxWidth: "600px", marginLeft: "auto", marginRight: "auto", marginTop: "60px" }}></div>
			<div id="features"></div>

			<Benefits data={benefitOne} />
			<Benefits imgPos="right" data={benefitTwo} />
			<Benefits data={benefitThree} />

			<div id="faq"></div>

			<SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
				Most asked Questions about Kite
			</SectionTitle>

			<Faq />
			<Cta />
		</Container >
	);
}
