import { serialize } from "next-mdx-remote/serialize";
import { getPlaiceholder } from "plaiceholder";
import { Fragment } from "react";

import { FAQ } from "../components/FAQ/FAQ";
import { Hero2 } from "../components/Hero2";
import { LogoCloud } from "../components/LogoCloud";
import { Pricing } from "../components/Pricing";
import { AboutAuthor } from "../components/authors/AboutAuthor";
import { CourseContent } from "../components/courseContent/CourseContent";
import { ForWhom } from "../components/forWhom/ForWhom";
import { Layout } from "../components/layout/Layout";
import { LearningUnitList } from "../components/learningUnit/LearningUnitList";
import { ssrWebsite } from "../generated/page";
import { groupByType } from "../lib/utils";
import { InferGetStaticPropsType } from "../types";

type HomePageProps = InferGetStaticPropsType<typeof getStaticProps>;
type Section = HomePageProps["data"]["sections"][number];
interface SectionContentProps {
  section: Section;
  startDate: string;
}

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
    price: 2999,
    elements: [
      "kurs wideo",
      "napisy w wersji polskiej, angielskiej i francuskiej",
      "konsultacje wideo (grupowo)",
      "dostęp do <strong>prywatnego kanału Discord</strong> z autorami i współuczestnikami kursu"
    ]
  },
}

const SectionContent = ({
  section: { content, ...section },
  startDate,
}: SectionContentProps) => {
  if (content.length === 0) {
    return <Hero2 startDate={startDate} section={section} />;
  }

  // assumption: All elements in the content actually have the same type
  const contents = groupByType(content, "__typename");

  // if (contents.AgendaWeek) {
  //   return <Agenda section={section} agenda={contents.AgendaWeek} />;
  // }
  if (contents.Author) {
    return <AboutAuthor section={section} authors={contents.Author} />;
  }
  if (contents.Faq) {
    return <FAQ section={section} faqs={contents.Faq} />;
  }
  if (contents.Reason) {
    return <CourseContent section={section} reasons={contents.Reason} />;
  }
  return null;
};

export default function HomePage({
  data: { sections, ...otherData },
}: HomePageProps) {
  return (
    <Layout>
      {sections.map((s, idx) => {
        if (idx === 1) {
          return (
            <Fragment key={s.id}>
              {otherData.internships.length > 0 && <LogoCloud internships={otherData.internships} />}
              <ForWhom />
              <SectionContent startDate={otherData.startDate} section={s} />
              <LearningUnitList
                courseDetailsTitle={otherData.courseDetailsTitle}
                courseDetailsParagraph={otherData.courseDetailsParagraph}
                courseDetailsBox={otherData.courseDetailsBox}
              />
            </Fragment>
          );
        }
        return (
          <SectionContent
            section={s}
            key={s.id}
            startDate={otherData.startDate}
          />
        );
      })}
      <Pricing pricing={pricing} />
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

  if (response.props.error || !website) {
    return {
      notFound: true as const,
    };
  }

  const data = {
    ...website,
    courseDetailsParagraph: await toMdx(website.courseDetailsParagraph),
    courseDetailsBox: await Promise.all(
      website.courseDetailsBox.map((content) => toMdx(content))
    ),
    sections: await Promise.all(
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
    ),
  };

  return {
    props: { data },
    revalidate: 75,
  };
}
