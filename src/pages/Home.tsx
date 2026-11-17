import { Hero, ServicesPreview, WhyChooseUs, Testimonials, ContactCTA, StatsBar } from '@/components/Sections';

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesPreview />
      <WhyChooseUs />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
