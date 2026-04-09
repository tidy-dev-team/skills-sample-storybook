import PropTypes from 'prop-types';
import './button.css';

/**
 * Quirky Button — DS Generated
 *
 * Neon-green brand colors, glitch hover (cyan #1AC6FF), glitch press (pink #FF3399).
 * Synced from Figma polish pass — border-radius: 20px, Geist Mono Black, UPPERCASE.
 * Figma: https://www.figma.com/design/CdytzPWDTc7npImeQG0Pnc/🦺-Dima-s-other-tests?node-id=2035-2116
 */
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
  /** Visual style: crazy=contained/neon, outline=border only, ghost=text only */
  variant: PropTypes.oneOf(['crazy', 'outline', 'ghost']),
  /** Height: sm=32px  md=40px  lg=48px */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /** Fades to 50% opacity, disables interaction */
  disabled: PropTypes.bool,
  /** Button label */
  children: PropTypes.node,
  /** Click handler */
  onClick: PropTypes.func,
};