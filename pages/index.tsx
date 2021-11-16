import Head from "next/head";
import React from "react";
import { ApolloQueryResult } from '@apollo/client';

import { FAQ } from "../components/FAQ/FAQ";
import { Hero2 } from "../components/Hero2";
import { LogoCloud } from "../components/LogoCloud";
import { Agenda } from "../components/agenda/Agenda";
import { AboutAuthor } from "../components/authors/AboutAuthor";
import { CourseContent } from "../components/courseContent/CourseContent";
import { ForWhom } from "../components/forWhom/ForWhom";
import { Layout } from "../components/layout/Layout";
import { LearningUnitList } from "../components/learningUnit/LearningUnitList";
import { WebsiteDocument, WebsiteQuery } from '../generated/graphql';
import { apolloClient } from './_app';

interface Props {
  website: WebsiteQuery
}

export default function Home({ website }: Props) {
  return (
    <Layout>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero2 />
      <LogoCloud />
      <ForWhom />
      <CourseContent {...website} />
      <LearningUnitList />
      <Agenda />
      {/* <Pricing  /> */}
      <FAQ {...website} />
      <AboutAuthor />
    </Layout>
  );
};

export async function getStaticProps() {
  const result: ApolloQueryResult<WebsiteQuery | undefined> =
    await apolloClient.query({ 
      query: WebsiteDocument, 
      variables: {} 
    });

  const { data: website } = result; 
  return {
    props: { website }
  }
}
