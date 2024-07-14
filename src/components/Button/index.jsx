import PropTypes from 'prop-types';
import "./button.css";

const Button = ({ text = "", onClick, type = "", disabled = false, icon = null }) => {
  return (
    <button className="button" onClick={onClick} type={type} disabled={disabled}>
      <span className='icon'>{icon}</span>
      <span className='text'>{text}</span>
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.node
};

export default Button;
