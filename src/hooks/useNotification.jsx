import { actionConst } from "../util/actionConstants";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

const useNotification = () => {
    const { state, dispatch } = useContext(GlobalContext);

    const addNotification = (message, type) => {
        dispatch(
            {
                type: actionConst.SET_NOTIFICATIONS,
                payload: [...state.notifications, { message, type }]
            }
        );
    };

    const removeNotification = (index) => {
        //! Mala práctica solo usar para JSON Server
        location.reload(); //mala practica, solo para que funcione con JSON Server
        dispatch(
            {
                type: actionConst.SET_NOTIFICATIONS,
                payload: state.notifications.filter((_, i) => i !== index)
            }
        );
    };

    return {
        addNotification,
        removeNotification
    }
}

export default useNotification;