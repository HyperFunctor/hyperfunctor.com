import { Agenda } from "../components/Agenda";
import { Authors } from "../components/Authors";
import { Companies } from "../components/Companies";
import { ContentSection } from "../components/ContentSection";
import { DemoApp } from "../components/DemoApp";
import { Faq } from "../components/Faq";
import { Features } from "../components/Features";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { NewsletterSection } from "../components/NewsletterSection";
import { Stats } from "../components/Stats";
import { Technologies } from "../components/Technologies";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Technologies />
      <Features />
      <ContentSection />
      <Stats />
      <Agenda />
      <Companies />
      <DemoApp />
      <Authors />
      <NewsletterSection variant="inverse" />
      <Faq />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
