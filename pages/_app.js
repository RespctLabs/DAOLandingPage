import { Metrics } from '@layer0/rum';
import { useEffect } from 'react';
import Navbar from '../components/navbar';
import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';
import LayoutWrapper from '../layouts/LayoutWrapper';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  // For layer0 analytics
  useEffect(() => {
    if (process.env.NODE_ENV == 'production') {
      new Metrics({
        token: '476c34de-207c-489f-ae69-b4e121723f75',
      }).collect();
    }
  }, []);

  // For google analytics
  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url,
      });
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <LayoutWrapper {...pageProps}>
        <Component {...pageProps} />
      </LayoutWrapper>
    </SessionProvider>
  );
}

export default MyApp;
