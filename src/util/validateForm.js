export const validate = (values) => {
  let errors = {};
  /*Se usa el operador ? delante del . para que en caso de nulo devuelva 
  undefined en lugar de error*/

  if (values?.titulo == "") {
    errors.titulo = "El título es requerido";
  }

  if (values?.categoria == "") {
    errors.categoria = "La categoría es requerida";
  }

  if (values?.imagen == "") {
    errors.imagen = "La url de la imagen es requerida";
  }

  if (values?.url == "") {
    errors.url = "La url del video es requerida";
  }

  if (values?.descripcion == "") {
    errors.descripcion = "La descripción es requerida";
  }

  /*
  if (!values.email) {
    errors.email = "El correo electrónico es requerido";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "El correo electrónico no es válido";
  }

  if (!values.password) {
    errors.password = "La contraseña es requerida";
  } else if (values.password.length < 6) {
    errors.password = "La contraseña debe tener al menos 6 caracteres";
  }
*/

  return errors;
};
