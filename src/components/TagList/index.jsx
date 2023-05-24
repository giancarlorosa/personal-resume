import PropTypes from 'prop-types';
import classNames from 'classnames';

function TagList({ children }) {
  return <ul>{children}</ul>;
}

function Tag({ children }) {
  const tagClasses = classNames(
    'bg-deep-sky-blue',
    'text-white',
    'inline-block',
    'py-1.5',
    'px-2.5',
    'my-1',
    'mx-0.5',
    'rounded'
  );
  return <li className={tagClasses}>{children}</li>;
}

// TODO: find a way to validate compound components.
TagList.propTypes = { children: PropTypes.node.isRequired };
Tag.propTypes = { children: PropTypes.string.isRequired };

export default TagList;
export { Tag };
