// Importamos useState y useEffect desde React
import { useState, useEffect } from 'react';

// Definimos un hook personalizado llamado useFormValidation
const useFormValidation = (initialState, validate) => {

    // Estado para los valores del formulario, inicializado con initialState
    const [values, setValues] = useState(initialState);

    // Estado para los errores del formulario, inicializado con un objeto vacío
    const [errors, setErrors] = useState({});

    // Estado para rastrear los campos que han sido tocados por el usuario
    const [touched, setTouched] = useState({});

    // Estado para controlar si el formulario se está enviando, inicializado en false
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Estado para controlar si el formulario es válido, inicializado en false
    const [isValid, setIsValid] = useState(false);

    // useEffect que se ejecuta cada vez que errors o values cambian
    useEffect(() => {

        // Determinamos si no hay errores en el formulario
        const noErrors = Object.keys(errors).length === 0;

        // Actualizamos isValid para que sea true si no hay errores y todos los campos tienen un valor
        setIsValid(noErrors && Object.values(values).every(value => value !== ''));

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

        // Se recibe el campo validado con los posibles errores en caso de no tener
        // devuelve un objeto vacío
        const validatedError = validate({ [name]: value });
        if (Object.keys(validatedError).length === 0) {
            // En caso de estar vació se sobrescribe el valor del campo en errors con ''
            setErrors({
                ...errors,
                [name]: ''
            });
        } else {
            // En caso contrario se sobrescribe el valor del campo en errors con el error
            setErrors({
                ...errors,
                ...validatedError,
            });
        }
    };

    // Función para manejar la pérdida de foco en los campos del formulario
    const handleBlur = (e) => {
        // Extrae el nombre y el valor del campo que disparó el evento
        const { name } = e.target;
        // Marca el campo como "tocado"
        setTouched({
            ...touched,
            [name]: true,
        });
        // Se crea un nuevo objeto touchedValues a partir del objeto touched y values.
        // Dicho objeto contiene los valores de los campos tocados hasta el momento.        
        let touchedValues = Object.keys(touched).reduce((acc, key) => {
            acc[key] = values[key];
            return acc;
        }, {});

        //Forzar la asignación para cuando es el primer campo, es necesario porque 
        //touched no se actualiza
        touchedValues[name] = values[name];

        // Validamos los campos tocados hasta el momento
        const validationErrors = validate(touchedValues);

        // Actualiza el estado de errors con los errores de validación, cuando no hayan
        // errores esto va a convertir 'errors' en una lista vacía
        setErrors({
            ...validationErrors
        });
    };

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        // Prevenimos el comportamiento por defecto del formulario (recargar la página)
        e.preventDefault();

        // Validamos todos los campos del formulario
        const validationErrors = validate(values);
        setErrors(validationErrors);

        // Marca todos los campos como "tocados"
        setTouched(
            Object.keys(values).reduce((acc, key) => {
                acc[key] = false;
                return acc;
            }, {})
        );
        // Marcamos el formulario como enviándose
        setIsSubmitting(true);
    };

    const handleReset = () => {
        const resetValues = Object.keys(initialState).reduce((acc, key) => {
            acc[key] = "";
            return acc;
        }, {});
        setValues(resetValues);
        setErrors({});
        setTouched({});
        setIsSubmitting(false);
        setIsValid(false);
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
        touched,
        handleReset,
    };
};

// Exportamos el hook personalizado para su uso en otros componentes
export default useFormValidation;
