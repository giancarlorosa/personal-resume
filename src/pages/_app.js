import '@/styles/globals.css';
import PropTypes from 'react';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

App.defaultProps = {
  Component: null,
  pageProps: null,
};

// TODO: Check if there is an alternative for these propType.
App.propTypes = {
  Component: PropTypes.elementType,
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: PropTypes.object,
};
