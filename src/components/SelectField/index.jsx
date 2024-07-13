import '../../css/fields.css'
import PropTypes from 'prop-types'

const SelectField = ({
  id,
  name,
  value,
  categorias,
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
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`field ${classNameInput}`}
        required={required}
      >
        {
          placeholder !== "" &&
          <option value="" disabled defaultValue="" hidden>
            {placeholder}
          </option>
        }
        {
          categorias.map((categoria, index) => (
            <option key={index} value={categoria.id}>
              {categoria.nombre}
            </option>
          ))
        }
      </select>
    </div>
  )
}

SelectField.propTypes = {

  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  categorias: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  classNameType: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  updateValueField: PropTypes.func,
  onChange: PropTypes.func, // Add the 'onChange' prop validation
  onBlur: PropTypes.func,
  classNameInput: PropTypes.string,
  classNameLabel: PropTypes.string,
};

export default SelectField