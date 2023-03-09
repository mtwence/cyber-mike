import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
export default function Home() {
  return (
    <div className='bg-stone-900 text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Cyber Mike</title>
      </Head>
      
      <Header/>

      <section id="hero" className='snap-start'>
      <Hero/> 
      </section>

      <section id="hero" className='snap-center'>
        <About/>
      </section>
      {/* Experiences */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact */}
    </div> 
  )
}
