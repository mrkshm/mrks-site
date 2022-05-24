import '../styles/globals.css'
import HeaderNav from "../components/HeaderNav";
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <HeaderNav />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp
