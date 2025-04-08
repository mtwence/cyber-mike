import '../styles/globals.css'
import type { AppProps } from 'next/app'
import HomeButton from '../components/HomeButton'

function App({ Component, pageProps }: AppProps) {
  // @ts-ignore
  return (
    <>
      <Component {...pageProps} />
      <HomeButton />
    </>
  )
}

export default App
