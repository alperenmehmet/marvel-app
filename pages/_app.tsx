import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppProvider } from '../context/context'
import { Navbar } from '../components/navbar'
import { Sidebar } from '../components/sidebar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Navbar />
      <Sidebar />
      <Component {...pageProps} />
    </AppProvider>
  )
}
