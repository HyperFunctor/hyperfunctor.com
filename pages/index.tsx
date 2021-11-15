import { promises as fs } from "fs";
import Head from "next/head";
import React from "react";
import { AboutAuthor } from "../components/AboutAuthor";
import { Agenda } from "../components/Agenda";
import { CourseContent } from "../components/CourseContent";
import { FAQ } from "../components/FAQ";
import { ForWhom } from "../components/ForWhom";
import { Hero2 } from "../components/Hero2";
import { Layout } from "../components/Layout";
import { LearningUnitList } from "../components/LearningUnitList";

import { LogoCloud } from "../components/LogoCloud";

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
