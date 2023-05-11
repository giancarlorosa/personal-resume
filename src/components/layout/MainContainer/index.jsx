import { Poppins } from 'next/font/google';
import PropTypes from 'prop-types';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

function MainContainer({ children }) {
  return <div className={`${poppins.variable} font-poppins`}>{children}</div>;
}

MainContainer.propTypes = {
  children: PropTypes.node,
};

MainContainer.defaultProps = {
  children: null,
};

export default MainContainer;
