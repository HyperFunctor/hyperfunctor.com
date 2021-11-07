import { DefaultSeo } from 'next-seo';

import '../styles/main.css'
import { PL } from '../seo.config';

import { AppWrapper } from '../components/AppContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...PL} />
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </>
  )
}

export default MyApp