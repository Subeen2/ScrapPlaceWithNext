import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
  <Script 
   src="//dapi.kakao.com/v2/maps/sdk.js?appkey=37c551bdafff8d6175372b2928f4cecc&libraries=services,clusterer,drawing&autoload=false"/>
  <Component {...pageProps} />
  </>);
}
