import '@/styles/base.css';
import type { AppProps } from 'next/app';
// import { Inter } from 'next/font/google';

/*
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});
*/
// className={inter.variable}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
