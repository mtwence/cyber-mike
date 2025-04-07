import type { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkXp from "../components/WorkXp";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Education from "../components/Education";
import ResumeButton from "../components/ResumeButton";
import {Experience, PageDetails, Project, Skill, Social, Education as EducationType} from "../typings"
import { fetchSkills } from "../utils/fetchSkills";
import {fetchSocials} from "../utils/fetchSocials";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchPageDetails } from "../utils/fetchPageDetails";
import { fetchEducation } from "../utils/fetchEducation";

type Props = {
  pageDetails: PageDetails;
  experience: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
  education: EducationType[];
}

const Home = ({pageDetails, experience, projects, skills, socials, education}: Props) => {
  return (
    <div className="text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar --webkit-scrollbar-thumb-emerald-500">
      <Head>
        <title>Cyber Mike</title>
        <style>
          @import
          url(&apos;https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap&apos;);
          @import url(&apos;https://fonts.cdnfonts.com/css/karmatic-arcade&apos;);
        </style>
      </Head>

      <Header socials={socials}/>
      <ResumeButton pageDetails={pageDetails}/>

      <section id="hero" className="snap-start relative">
        <div className="absolute inset-0 bg-space opacity-90"></div>
        <div className="relative z-10">
          <Hero pageDetails={pageDetails}/>
        </div>
      </section>

      <section id="about" className="snap-center relative">
        <div className="absolute inset-0 bg-nightsky opacity-85"></div>
        <div className="relative z-20">
          <About pageDetails={pageDetails}/>
        </div>
      </section>

      <section id="experience" className="snap-center relative">
        <div className="absolute inset-0 bg-dawn opacity-80"></div>
        <div className="relative z-10">
          <WorkXp experience={experience}/>
        </div>
      </section>

      <section id="education" className="snap-center relative">
        <div className="absolute inset-0 bg-blend opacity-70"></div>
        <div className="relative z-10">
          <Education education={education}/>
        </div>
      </section>

      <section id="skills" className="snap-start relative">
        <div className="absolute inset-0 bg-sky opacity-60"></div>
        <div className="relative z-10">
          <Skills skills={skills} />
        </div>
      </section>

      <section id="projects" className="snap-start relative">
        <div className="absolute inset-0 bg-mountains opacity-60"></div>
        <div className="relative z-10">
          <Projects projects={projects} />
        </div>
      </section>

      <section id="contact" className="snap-start relative">
        <div className="absolute inset-0 bg-land opacity-60"></div>
        <div className="relative z-10">
          <ContactMe pageDetails={pageDetails} />
        </div>
      </section>
    </div>
  );
}

export default Home;

export async function getStaticProps() {
  const pageDetails: PageDetails = await fetchPageDetails();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();
  const education: EducationType[] = await fetchEducation();

  console.log('Fetched experiences:', experiences);
  console.log('Fetched education:', education);

  return {
    props: {
      pageDetails,
      experience: experiences,
      skills,
      projects,
      socials,
      education,
    },
    revalidate: 10,
  }
}
