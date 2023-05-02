import '@/styles/globals.css';
import PropTypes from 'react';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

App.defaultProps = {
  pageProps: null,
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  // TODO: Check if there is an alternative for this propType.
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: PropTypes.object,
};
