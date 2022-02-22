import { serialize } from "next-mdx-remote/serialize";
import { getPlaiceholder } from "plaiceholder";
import { DeepReadonly } from "ts-essentials";

import { CallToActionInternship } from "../components/CallToActionInternship";
import { CallToActionSection } from "../components/CallToActionSection";
import { FAQ } from "../components/FAQ/FAQ";
import { Hero } from "../components/Hero";
import { LogoCloud } from "../components/LogoCloud";
import { Pricing, Pricing2 } from "../components/Pricing";
import { Agenda } from "../components/agenda/Agenda";
import { AboutAuthor } from "../components/authors/AboutAuthor";
import { CourseContent } from "../components/courseContent/CourseContent";
import { ReasonItem } from "../components/courseContent/CourseContentItem";
import { ForWhom } from "../components/forWhom/ForWhom";
import { Layout } from "../components/layout/Layout";
import { LearningUnitList } from "../components/learningUnit/LearningUnitList";
import { AgendaWeekFragment, CompanyFragment } from "../generated/graphql";
import { ssrWebsite, ssrCompanyList } from "../generated/page";
import { pricing } from "../lib/pricing";
import { AuthorFragmentMDX, FaqFragmentMDX } from "../props";
import { InferGetStaticPropsType } from "../types";

type HomePageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function HomePage({
  sections,
  companies,
  ...otherData
}: HomePageProps) {
  return (
    <Layout>
      <Hero startDate={otherData.startDate} section={sections.hero} />
      {companies.length > 0 && (
        <LogoCloud companies={companies as CompanyFragment[]} />
      )}
      <ForWhom />
      <CallToActionSection />
      <CourseContent
        section={sections.course}
        reasons={sections.course.content}
      />
      <CallToActionInternship />
      <Agenda section={sections.agenda} agenda={sections.agenda.content} />
      <Pricing pricing={pricing} />
      <FAQ section={sections.faq} faqs={sections.faq.content} />
      <AboutAuthor
        section={sections.authors}
        authors={sections.authors.content}
      />
      <Pricing2 pricing={pricing} authors={sections.authors.content} />
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
  const companies = r.props.data.companies;

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
    })
  );

  interface SectionsBySlug {
    agenda: SectionWithContent<readonly AgendaWeekFragment[]>;
    authors: SectionWithContent<readonly AuthorFragmentMDX[]>;
    course: SectionWithContent<readonly ReasonItem[]>;
    faq: SectionWithContent<DeepReadonly<FaqFragmentMDX[]>>;
    hero: Section;
  }
  type Section = typeof sections[number];
  type SectionWithContent<Content> = Omit<Section, "content"> & {
    content: Content;
  };
  const sectionsBySlug = sections.reduce((acc, current) => {
    return current.slug
      ? {
          ...acc,
          [current.slug]: current,
        }
      : acc;
  }, {}) as SectionsBySlug;

  const data = {
    ...website,
    courseDetailsParagraph,
    courseDetailsBox,
    sections: sectionsBySlug,
    companies,
  };

  return {
    props: data,
    revalidate: 75,
  };
}
