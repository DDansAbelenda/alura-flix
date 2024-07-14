// Notification.js
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for props validation
import './notification.css'; // Para agregar estilos

const Notification = ({ message, type, duration = 5000, onClose }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, duration);
        return () => clearTimeout(timer);
    }, [duration, onClose]);

    if (!visible) return null;

    return (
        <div className={`notification ${type}`}>
            <div className="notification-content">
                <span className="message">{message}</span>
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
            </div>
        </div>
    );
};

// Add props validation
Notification.propTypes = {
    message: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    duration: PropTypes.number,
    onClose: PropTypes.func,
};

export default Notification;
