import '../../css/fields.css'
import PropTypes from 'prop-types'

const SelectField = ({ value, categorias, title, classNameType, placeholder = "", required, updateValueField }) => {
  const handleChange = (e) => {
    updateValueField(e.target.value);
  }

  return (
    <div className="input-wrapper">
      <label>{title}</label>
      <select value={value} className={classNameType} required={required} onChange={handleChange}>
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
  type: PropTypes.string, // Add the 'type' prop validation
  value: PropTypes.string.isRequired,
  categorias: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  classNameType: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  updateValueField: PropTypes.func,
};

export default SelectField