import PropTypes from 'prop-types';
import MainContainer from '@/layout/MainContainer';

function Typography({ children }) {
  return <MainContainer>{children}</MainContainer>;
}

Typography.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Typography;
