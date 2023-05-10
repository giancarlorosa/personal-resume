import '@/styles/globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

// TODO: Check for App propTypes in the future.
// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <div className={`${poppins.variable} font-poppins`}>
      <Component {...pageProps} />
    </div>
  );
}
