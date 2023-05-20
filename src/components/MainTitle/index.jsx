import PropTypes from 'prop-types';
import classNames from 'classnames';

function MainTitle({ children }) {
  const mainTitleClasses = classNames(
    'flex',
    'flex-col',
    'items-center',
    'font-bold',
    'mb-7',
    'text-4xl',
    'sm:text-5xl',
    'lg:text-6xl',
    'leading-tight',
    'sm:leading-tight',
    'lg:leading-tight',
    'text-dark-jungle-green',
    'text-center',
    'after:bg-mercury',
    'after:block',
    'after:content-[""]',
    'after:h-0.5',
    'after:mt-4',
    'after:w-14'
  );
  return <h1 className={mainTitleClasses}>{children}</h1>;
}

MainTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default MainTitle;
