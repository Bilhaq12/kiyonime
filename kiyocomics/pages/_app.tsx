import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react';
import AppNavbar from '../components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <AppNavbar />
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;