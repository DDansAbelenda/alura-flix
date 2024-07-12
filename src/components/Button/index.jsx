import PropTypes from 'prop-types';
import "./button.css";

const Button = ({ text , onClick, type}) => {
  return (
    <button className="button" onClick={onClick} type={type}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string
};

export default Button;
