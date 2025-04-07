import '../styles/globals.css'
import type { AppProps } from 'next/app'
import HomeButton from '../components/HomeButton'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <HomeButton />
    </>
  )
}
