import PropTypes from 'prop-types';
import './button.css';

export const Button = ({
  variant = 'crazy',
  size = 'md',
  disabled = false,
  children = 'Button',
  onClick,
  ...props
}) => (
  <button
    type="button"
    className={`qb-button qb-button--${variant} qb-button--${size}`}
    disabled={disabled}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);

Button.propTypes = {
  variant:  PropTypes.oneOf(['crazy', 'outline', 'ghost']),
  size:     PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool,
  children: PropTypes.node,
  onClick:  PropTypes.func,
};
