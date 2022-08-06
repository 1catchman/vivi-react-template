import '../styles/index.scss';
import type { AppProps } from 'next/app';
import SSRProvider from 'react-bootstrap/SSRProvider';
import { useState, useEffect } from 'react';
import { SessionProvider } from 'next-auth/react';
import '@/styles/custom.scss';

function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <SessionProvider session={pageProps.session}>
        <SSRProvider>
          <Component {...pageProps} />
        </SSRProvider>
      </SessionProvider>
    );
  }
}

export default MyApp;
