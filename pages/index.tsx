import { serialize } from "next-mdx-remote/serialize";
import { getPlaiceholder } from "plaiceholder";

import { CallToActionInternship } from "../components/CallToActionInternship";
import { CallToActionSection } from "../components/CallToActionSection";
import { FAQ } from "../components/FAQ/FAQ";
import { Hero } from "../components/Hero";
import { LogoCloud } from "../components/LogoCloud";
import { Pricing } from "../components/Pricing";
import { AboutAuthor } from "../components/authors/AboutAuthor";
import { CourseContent } from "../components/courseContent/CourseContent";
import { ForWhom } from "../components/forWhom/ForWhom";
import { Layout } from "../components/layout/Layout";
import { LearningUnitList } from "../components/learningUnit/LearningUnitList";
import { CompanyFragment } from "../generated/graphql";
import { ssrWebsite, ssrCompanyList } from "../generated/page";
import { InferGetStaticPropsType } from "../types";

type HomePageProps = InferGetStaticPropsType<typeof getStaticProps>;

export const pricing = {
  title: "Kurs Next.js",
  choose: "Wybierz pakiet",
  presale: "Przedsprzedaż do 24 stycznia 2021",
  vat: "cena uwzględnia 23% VAT",
  full: {
    buy: "Kup",
    key: "full",
    name: "Popularny ;)",
    cheaper: "mniej o",
    until: "do 24/01/2021",
    price: 2100,
    elements: [
      "kurs wideo",
      "napisy w wersji polskiej, angielskiej i francuskiej",
      "konsultacje wideo (grupowo)",
      "dostęp do <strong>prywatnego kanału Discord</strong> z autorami i współuczestnikami kursu"
    ]
  },
}

export default function HomePage({ sections, companies, ...otherData }: HomePageProps) {

  return (
    // easily manage the order of sections
    <Layout>
      <Hero startDate={otherData.startDate} section={sections.hero} />
      {companies.length > 0 && <LogoCloud companies={companies as CompanyFragment[]} />}
      <ForWhom />
      <CallToActionSection />
      <CourseContent section={sections.course} reasons={sections.course.content} />
      <CallToActionInternship />
      <LearningUnitList
        courseDetailsTitle={otherData.courseDetailsTitle}
        courseDetailsParagraph={otherData.courseDetailsParagraph}
        courseDetailsBox={otherData.courseDetailsBox}
      />
      {/* <Agenda section={sections.agenda} agenda={sections.agenda.content} /> */}
      <Pricing pricing={pricing} />
      <FAQ section={sections.faq} faqs={sections.faq.content} />
      <AboutAuthor section={sections.authors} authors={sections.authors.content} />
    </Layout>
  );
}

function toMdx(content: string | undefined | null) {
  if (content === null || content === undefined) {
    return content;
  }
  return serialize(content);
}

export async function getStaticProps() {
  const response = await ssrWebsite.getServerPage({});
  const website = response.props.data.websites[0];

  const r = await ssrCompanyList.getServerPage({});
  const companies = r.props.data.companies

  if (response.props.error || !website) {
    return {
      notFound: true as const,
    };
  }

  const courseDetailsParagraph = await toMdx(website.courseDetailsParagraph);
  const courseDetailsBox = await Promise.all(
    website.courseDetailsBox.map((content) => toMdx(content))
  );

  const sections = await Promise.all(
    website.sections.map(async (section) => {
      return {
        ...section,
        subTitle: await toMdx(section.subTitle),
        content: await Promise.all(
          section.content.map(async (content) => {
            switch (content.__typename) {
              case "Reason": {
                const plaiceholder = content.image?.url
                  ? await getPlaiceholder(content.image.url)
                  : null;

                return {
                  ...content,
                  description: await toMdx(content.description),
                  ...(plaiceholder && {
                    image: {
                      width: plaiceholder.img.width,
                      height: plaiceholder.img.height,
                      url: plaiceholder.img.src,
                    },
                    plaiceholder: plaiceholder.base64,
                  }),
                };
              }
              case "Author": {
                return {
                  ...content,
                  bio: await toMdx(content.bio),
                };
              }
              case "Faq": {
                return {
                  ...content,
                  answer: await toMdx(content.answer),
                };
              }
              default: {
                return content;
              }
            }
          })
        ),
      };
    }, {})
  )

  const bySlug = (stored: any, current: any) => ({ ...stored, [current.slug]: current })
  const sectionsBySlug = sections.reduce(bySlug, {});

  const data = {
    ...website,
    courseDetailsParagraph,
    courseDetailsBox,
    sections: sectionsBySlug,
    companies
  };

  return {
    props: { ...data },
    revalidate: 75,
  };
}
