import { promises as fs } from "fs";
import yaml from "js-yaml";
import Head from "next/head";

import {
  Agenda,
  CourseContent,
  Base,
  ForWhom,
  LearningUnitList,
  FAQ,
  AboutAuthor,
  Hero2,
} from "../components";
import { LogoCloud } from "../components/LogoCloud";

export default function Home({ website, branch }) {
  return (
    <Base website={website}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero2 />
      <LogoCloud />
      <ForWhom />
      <CourseContent />
      <LearningUnitList />
      <Agenda {...website} />
      {/* <Pricing  /> */}
      <FAQ {...website} />
      <AboutAuthor {...website} />
    </Base>
  );
}

export async function getStaticProps() {
  const f = await fs.readFile("data.yml", "utf8");
  const data = yaml.load(f);
  const lang = process.env.GIT_BRANCH === "english" ? "en" : "pl";
  const { [lang]: website } = data;

  return {
    props: { website },
  };
}
