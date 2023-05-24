import '@/styles/globals.css';
import MainContainer from '@/layout/MainContainer/';

// TODO: Check for App propTypes in the future.
// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <MainContainer>
      <Component {...pageProps} />
    </MainContainer>
  );
}
