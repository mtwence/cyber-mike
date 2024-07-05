import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";

export default function Home() {
  return (
    <div className="bg-amber-50 text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar --webkit-scrollbar-thumb-emerald-500">
      <Head>
        <title>Cyber Mike</title>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
          @import url('https://fonts.cdnfonts.com/css/karmatic-arcade');
        </style>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center bg-clouds">
        <About />
      </section>

      <section id="experience" className="snap-center bg-cloudsw">
        <Experience />
      </section>

      <section id="skills" className="snap-start bg-plane">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      {/* Contact */}
    </div>
  );
}
