import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'

export default function Home() {
  return (
    <div className='bg-amber-50 text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Cyber Mike</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
          @import url('https://fonts.cdnfonts.com/css/karmatic-arcade');
        </style>

      </Head>

      <Header />

      <section id="hero" className='snap-start'>
        <Hero />
      </section>

      <section id="about" className='snap-center bg-clouds'>
        <About />
      </section>

      <section id="experience" className='snap-center bg-cloudsw'>
        <Experience />
      </section>

      <section id='skills' className='snap-start bg-clouds'>
        <Skills />
      </section>

      <section id='projects' className='snap-start'>
        <Projects />
      </section>

      {/* Contact */}
    </div>
  )
}
