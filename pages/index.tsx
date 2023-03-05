import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Cyber Mike</title>
      </Head>
      <h1 className="p-10 text-red-500">Hello is this thing on???</h1>
       
      {/* Header */}
        <Header />

      {/* Hero */}

      {/* About */}

      {/* Experiences */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact */}
    </> 
  )
}
