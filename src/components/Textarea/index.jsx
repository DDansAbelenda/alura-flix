import '../../css/fields.css'
import PropTypes from 'prop-types';


const Textarea = ({ value, title, classNameType, rows, placeholder = "", required, updateValueField }) => {

    const handleChange = (e) => {
        updateValueField(e.target.value);
    }

    return (
        <div className="input-wrapper">
            <label>{title}</label>
            <textarea
                value={value}
                className={`field ${classNameType}`}
                rows={rows}
                placeholder={placeholder}
                required={required}
                onChange={handleChange} />
        </div>
    )
}

Textarea.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    classNameType: PropTypes.string.isRequired,
    rows: PropTypes.number.isRequired,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    updateValueField: PropTypes.func,
};

export default Textarea;