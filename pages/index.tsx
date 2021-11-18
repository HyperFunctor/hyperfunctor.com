import { getPlaiceholder } from "plaiceholder";
import { Fragment } from "react";

import { FAQ } from "../components/FAQ/FAQ";
import { Hero2 } from "../components/Hero2";
import { LogoCloud } from "../components/LogoCloud";
import { Agenda } from "../components/agenda/Agenda";
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
}

const SectionContent = ({
  section: { content, ...section },
}: SectionContentProps) => {
  // assumption: All elements in the content actually have the same type
  const contents = groupByType(content, "__typename");

  if (contents.AgendaWeek) {
    return <Agenda section={section} agenda={contents.AgendaWeek} />;
  }
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
      <Hero2 />
      <LogoCloud internships={otherData.internships} />
      <ForWhom />
      {sections.map((s) => {
        return (
          <Fragment key={s.id}>
            <SectionContent section={s} />
          </Fragment>
        );
      })}

      <LearningUnitList
        courseDetailsTitle={otherData.courseDetailsTitle}
        courseDetailsParagraph={otherData.courseDetailsParagraph}
        courseDetailsBox={otherData.courseDetailsBox}
      />
    </Layout>
  );
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
    sections: await Promise.all(
      website.sections.map(async (section) => {
        return {
          ...section,
          content: await Promise.all(
            section.content.map(async (content) => {
              if (content.__typename === "Reason") {
                const plaiceholder = content.image?.url
                  ? await getPlaiceholder(content.image.url)
                  : null;

                return {
                  ...content,
                  ...(plaiceholder && {
                    image: {
                      width: plaiceholder.img.width,
                      height: plaiceholder.img.height,
                      url: plaiceholder.img.src,
                    },
                    plaiceholder: plaiceholder.base64,
                  }),
                };
              } else {
                return content;
              }
            })
          ),
        };
      })
    ),
  };

  return {
    props: { data },
  };
}
