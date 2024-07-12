import PropTypes from 'prop-types';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Dialog = styled.div`
  background: #0e1a2b;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  color: #fff;
  width: 300px;
`;

const Message = styled.p`
  margin: 20px 0;
  font-size: 1.2em;
`;

const Button = styled.button`
  background: ${props => (props.primary ? '#007bff' : 'transparent')};
  color: ${props => (props.primary ? '#fff' : '#007bff')};
  border: 2px solid #007bff;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1em;
  margin: 0 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => (props.primary ? '#0056b3' : '#007bff')};
    color: #fff;
  }
`;

const ConfirmationDialog = ({ message, onConfirm, onCancel }) => {
    return (
        <Overlay>
            <Dialog>
                <Message>{message}</Message>
                <Button primary onClick={onConfirm}>Confirmar</Button>
                <Button onClick={onCancel}>Cancelar</Button>
            </Dialog>
        </Overlay>
    );
};

ConfirmationDialog.propTypes = {
    message: PropTypes.string.isRequired,
    onConfirm: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
};

export default ConfirmationDialog;

/**
 * import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Dialog = styled.div`
  background: #0e1a2b;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  color: #fff;
  width: 300px;
`;

const Message = styled.p`
  margin: 20px 0;
  font-size: 1.2em;
`;

const Button = styled.button`
  background: ${props => (props.primary ? '#007bff' : 'transparent')};
  color: ${props => (props.primary ? '#fff' : '#007bff')};
  border: 2px solid #007bff;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1em;
  margin: 0 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => (props.primary ? '#0056b3' : '#007bff')};
    color: #fff;
  }
`;

const Confirmacion = ({ message, onConfirm, onCancel }) => {
  return (
    <Overlay>
      <Dialog>
        <Message>{message}</Message>
        <Button primary onClick={onConfirm}>Confirmar</Button>
        <Button onClick={onCancel}>Cancelar</Button>
      </Dialog>
    </Overlay>
  );
};

export default Confirmacion;

 */