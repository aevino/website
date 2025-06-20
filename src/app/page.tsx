import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import AnimatedSection from "@/components/animatedSection";
export const metadata: Metadata = {
  title: "Aevino | Tech Development Company",
  description:
    "Every solution is designed with your success in mind – scalable, secure, and built to last",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <AnimatedSection>
        <Hero />
      </AnimatedSection>
      <AnimatedSection>
        <Features />
      </AnimatedSection>
      <AnimatedSection>
        <Stats />
      </AnimatedSection>
      <AnimatedSection>
        <Video />
      </AnimatedSection>
      <AnimatedSection>
        <Brands />
      </AnimatedSection>
      <AnimatedSection>
        <AboutSectionOne />
      </AnimatedSection>
      <AnimatedSection>
        <AboutSectionTwo />
      </AnimatedSection>
      <AnimatedSection>
        <Testimonials />
      </AnimatedSection>
      {/* <Pricing />
      <Blog /> */}
      <AnimatedSection>
        <Contact />
      </AnimatedSection>
    </>
  );
}
