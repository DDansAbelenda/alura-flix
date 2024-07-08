
import PropTypes from 'prop-types';

const CardButton = ({ children, icon, onClick }) => {
  return (
    <button onClick={onClick} className='button-card'>
      <span className='icon'>{icon}</span>
      <span className='text'>{children}</span>
    </button>
  )
}

CardButton.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default CardButton;