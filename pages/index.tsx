import { Agenda } from "../components/Agenda";
import { Authors } from "../components/Authors";
import { Companies } from "../components/Companies";
import { ContentSection } from "../components/ContentSection";
import { DemoApp } from "../components/DemoApp";
import { Faq } from "../components/Faq";
import { Footer } from "../components/Footer";
import { ForWhom } from "../components/ForWhom";
import { Hero } from "../components/Hero";
import { NewsletterSection } from "../components/NewsletterSection";
import { Stats } from "../components/Stats";
import { Technologies } from "../components/Technologies";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Technologies />
      <ForWhom />
      <ContentSection />
      <Stats />
      <Agenda />
      <Companies />
      <DemoApp />
      <Authors />
      <NewsletterSection variant="inverse">
        Otrzymasz maila z unikalnym kodem rabatowym natychmiast gdy tylko ruszą
        zapisy na drugą edycję kursu Next.js, React i TypeScripta.
      </NewsletterSection>
      <Faq />
      <NewsletterSection>
        Otrzymasz maila z unikalnym kodem rabatowym natychmiast gdy tylko ruszą
        zapisy na drugą edycję kursu Next.js, React i TypeScripta.
      </NewsletterSection>
      <Footer />
    </div>
  );
}
