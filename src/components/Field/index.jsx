import '../../css/fields.css'
import PropTypes from 'prop-types';


const Field = ({
    type,
    id,
    name,
    value,
    title,
    onChange,
    onBlur,
    placeholder,
    classNameInput,
    classNameLabel,
    required
}) => {

    return (
        <div className="input-wrapper">
            <label className={classNameLabel}>{title}</label>
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                className={`field ${classNameInput}`}
                required={required}
                autoComplete="off"
            />
        </div>
    )
}

Field.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    classNameInput: PropTypes.string.isRequired,
    classNameLabel: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    required: PropTypes.bool,
    updateValueField: PropTypes.func,
};

export default Field