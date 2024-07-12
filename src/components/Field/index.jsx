import '../../css/fields.css'
import PropTypes from 'prop-types';


const Field = ({ type, value, title, classNameType, placeholder = "", required, updateValueField }) => {
    const handleChange = (e) => {
        updateValueField(e.target.value);
    }

    return (
        <div className="input-wrapper">
            <label>{title}</label>
            <input
                type={type}
                value={value}
                className={`field ${classNameType}`}
                placeholder={placeholder}
                required={required}
                onChange={handleChange} />
        </div>
    )
}

Field.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    classNameType: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    required: PropTypes.bool,
    updateValueField: PropTypes.func,
};

export default Field