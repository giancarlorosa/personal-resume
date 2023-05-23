import PropTypes from 'prop-types';
import classNames from 'classnames';

function SectionTitle({ children, fullWidth }) {
  const sectionTitleClasses = classNames(
    'text-2xl',
    'text-dark-jungle-green',
    'font-semibold',
    'relative',
    'mb-7',
    { 'inline-block': fullWidth === false },
    'after:bg-mercury',
    'after:block',
    'after:content-[""]',
    'after:h-0.5',
    'after:mt-1',
    'after:w-14',
    'after:w-full',
    'before:bg-deep-sky-blue',
    'before:block',
    'before:content-[""]',
    'before:h-0.5',
    'before:mt-1',
    'before:w-8',
    'before:absolute',
    'before:bottom-0'
  );

  return (
    <div>
      <h2 className={sectionTitleClasses}>{children}</h2>
    </div>
  );
}

SectionTitle.propTypes = {
  children: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
};

SectionTitle.defaultProps = {
  fullWidth: false,
};

export default SectionTitle;
