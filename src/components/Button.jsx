import './Button.css';
import PropTypes from 'prop-types';

function Button({
  children,
  color='default',
  size='base',
  // backgroundColor,
  onClick
}) {
  return (
    <button
      className={`${color} ${size}`}
      // style={backgroundColor && { backgroundColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'default', 'danger']),
  size: PropTypes.oneOf(['sm', 'base', 'lg']),
  onClick: PropTypes.func.isRequired
};