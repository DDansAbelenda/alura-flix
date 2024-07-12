
import PropTypes from 'prop-types';
import styled from 'styled-components';
const Button = styled.button`
/* Layout */
  background: none;
  border: none;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 5px;
  &:hover {
    color: #ffffffc0;
  }
`;

const CardButton = ({ children, icon, onClick }) => {
  return (
    <Button onClick={onClick} className='button-card'>
      <span className='icon'>{icon}</span>
      <span className='text'>{children}</span>
    </Button>
  )
}

CardButton.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default CardButton;