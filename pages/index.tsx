import Head from "next/head";
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

export default function Home() {
  return (
    <Layout>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero2 />
      <LogoCloud />
      <ForWhom />
      <CourseContent />
      <LearningUnitList />
      <Agenda />
      {/* <Pricing  /> */}
      <FAQ />
      <AboutAuthor />
    </Layout>
  );
}
