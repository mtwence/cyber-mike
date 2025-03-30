import type { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkXp from "@/components/WorkXp";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import {Experience, PageDetails, Project, Skill, Social} from "../typings"
import { fetchSkills } from "@/utils/fetchSkills";
import {fetchSocials} from "@/utils/fetchSocials";
import { fetchExperiences } from "@/utils/fetchExperiences";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchPageDetails } from "@/utils/fetchPageDetails";


type Props = {
  pageDetails: PageDetails;
  experience: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

const Home = ({pageDetails, experience, projects, skills, socials}: Props) => {
  return (
    <div className="text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar --webkit-scrollbar-thumb-emerald-500">
      <Head>
        <title>Cyber Mike</title>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
          @import url('https://fonts.cdnfonts.com/css/karmatic-arcade');
        </style>
      </Head>

      <Header socials={socials}/>

      <section id="hero" className="snap-start bg-night">
        <Hero pageDetails={pageDetails}/>
      </section>

      <section id="about" className="snap-center bg-nightday">
        <About />
      </section>

      <section id="experience" className="snap-center bg-amber-50 bg-clouds">
        <WorkXp />
      </section>

      <section id="skills" className="snap-start bg-plane">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
    </div>
  );
}

export default Home;

export async function getStaticProps () {
  const pageDetails: PageDetails = await fetchPageDetails();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageDetails,
      experiences,
      skills,
      projects,
      socials,
    }
  }
}
