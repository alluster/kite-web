import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Kite for RFP"
        title="Use Kite for your Tender process"
      >
		
With Kite you can do your RFP process.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

    
      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Most asked Questions about Kite
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}
