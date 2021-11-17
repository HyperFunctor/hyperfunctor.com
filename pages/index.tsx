import { GetStaticPropsResult } from "next";
import React from "react";

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
import { InferGetStaticPropsType } from "../types";

type HomePageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function HomePage({ data: { faqs, reasons } }: HomePageProps) {
  return (
    <Layout>
      <Hero2 />
      <LogoCloud />
      <ForWhom />
      <CourseContent reasons={reasons} />
      <LearningUnitList />
      <Agenda />
      <FAQ faqs={faqs} />
      <AboutAuthor />
    </Layout>
  );
}

export async function getStaticProps() {
  const { props } = await ssrWebsite.getServerPage({});

  if (props.error) {
    return {
      notFound: true as const,
    };
  }

  return {
    props: { data: props.data },
  };
}
