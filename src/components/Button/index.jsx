import PropTypes from 'prop-types';
import "./button.css";

const Button = ({ text, onClick, type, disabled = false }) => {
  return (
    <button className="button" onClick={onClick} type={type} disabled={disabled}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool
};

export default Button;
