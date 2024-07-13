import '../../css/fields.css'
import PropTypes from 'prop-types';


const Textarea = ({
    id,
    name,
    value,
    title,
    rows,
    onChange,
    onBlur,
    placeholder = "",
    classNameInput,
    classNameLabel,
    required,
}) => {


    return (
        <div className="input-wrapper">
            <label className={classNameLabel}>{title}</label>
            <textarea
                id={id}
                name={name}
                value={value}
                rows={rows}
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

Textarea.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    classNameType: PropTypes.string.isRequired,
    rows: PropTypes.number.isRequired,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    updateValueField: PropTypes.func,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    classNameInput: PropTypes.string.isRequired,
    classNameLabel: PropTypes.string.isRequired,
};

export default Textarea;