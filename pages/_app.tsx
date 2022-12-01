import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
