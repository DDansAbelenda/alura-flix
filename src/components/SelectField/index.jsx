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

/**
 * import "./ListaOpciones.css";

const ListaOpciones = (props) => {
  
  const manejarCambio = (e) => {
    console.log("cambio", e.target.value);
    props.actualizarEquipo(e.target.value);
  };

  return (
    <div className="lista-opciones">
      <label>Equipos</label>
      <select value={props.valor} onChange={manejarCambio}>
        <option value="" disabled defaultValue="" hidden>
          Seleccionar equipo
        </option>
        {props.equipos.map((equipo, index) => (
          <option key={index} value={equipo}>
            {equipo}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ListaOpciones;

 * 
 */

export default SelectField