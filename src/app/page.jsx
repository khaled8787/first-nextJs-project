import AboutSection from "@/components/AboutSection";
import Banner from "@/components/Banner";
import CTASection from "@/components/CTASection";
import FeaturesSection from "@/components/FeaturesSection";
import ItemsPreviewSection from "@/components/ItemsPreviewSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
     <Banner></Banner>
     <FeaturesSection></FeaturesSection>
     <AboutSection></AboutSection>
     <ItemsPreviewSection></ItemsPreviewSection>
     <WhyChooseSection></WhyChooseSection>
     <TestimonialsSection></TestimonialsSection>
     <CTASection></CTASection>
    </div>
  );
}
