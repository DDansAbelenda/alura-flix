// Importamos useState y useEffect desde React
import { useState, useEffect } from 'react';

// Definimos un hook personalizado llamado useFormValidation
const useFormValidation = (initialState, validate) => {
    // Estado para los valores del formulario, inicializado con initialState
    const [values, setValues] = useState(initialState);
    // Estado para los errores del formulario, inicializado con un objeto vacío
    const [errors, setErrors] = useState({});
    // Estado para controlar si el formulario se está enviando, inicializado en false
    const [isSubmitting, setIsSubmitting] = useState(false);
    // Estado para controlar si el formulario es válido, inicializado en false
    const [isValid, setIsValid] = useState(false);

    // useEffect que se ejecuta cada vez que errors o values cambian
    useEffect(() => {
        // Determinamos si no hay errores en el formulario
        const noErrors = Object.keys(errors).length === 0;
        // Actualizamos isValid para que sea true si no hay errores y todos los campos tienen un valor
        setIsValid(noErrors && Object.values(values).every(value => value));
    }, [errors, values]); // Dependencias del useEffect

    // Función para manejar el cambio en los campos del formulario
    const handleChange = (e) => {
        // Extraemos el nombre y el valor del campo que disparó el evento
        const { name, value } = e.target;
        // Actualizamos el estado de values con el nuevo valor del campo
        setValues({
            ...values,
            [name]: value,
        });
    };

    // Función para manejar la pérdida de foco en los campos del formulario
    const handleBlur = () => {
        // Validamos los valores actuales del formulario
        const validationErrors = validate(values);
        // Actualizamos el estado de errors con los errores de validación
        setErrors(validationErrors);
    };

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        // Prevenimos el comportamiento por defecto del formulario (recargar la página)
        e.preventDefault();
        // Validamos los valores actuales del formulario
        const validationErrors = validate(values);
        // Actualizamos el estado de errors con los errores de validación
        setErrors(validationErrors);
        // Marcamos el formulario como enviándose
        setIsSubmitting(true);
    };

    // Retornamos los manejadores y estados necesarios para el formulario
    return {
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        isValid,
        isSubmitting,
    };
};

// Exportamos el hook personalizado para su uso en otros componentes
export default useFormValidation;
