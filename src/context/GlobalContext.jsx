/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-case-declarations */
import { createContext, useEffect, useReducer } from "react";
import { initialState } from "./videosReducer";
import { videosReducer } from "./videosReducer";
import { actionConst } from "../util/actionConstants";
import { useApiVideos } from "../hooks/useApiVideos";
//Contexto Global utilizado compartido al resto de componentes
export const GlobalContext = createContext();

/*
 * Componente que comparte el contexto. Es este el que engloba todos los componentes
 * que deben recibir el contexto
*/
const GlobalContextProvider = ({ children }) => {
    const reducer = videosReducer;
    const [state, dispatch] = useReducer(reducer, initialState);
    const { getCategorias, getVideos } = useApiVideos();

    //Cargar el listado de categorías
    useEffect(() => {
        getCategorias().then(
            (data) => {
                dispatch({ type: actionConst.FETCH_CATEGORY, payload: data });
            }
        ).catch((error) => {
            dispatch({
                type: actionConst.SET_SERVER_ERROR,
                payload: { type: error.name, error: true }
            });
        });
    }, [getCategorias]);

    //Cargar el listado de videos
    useEffect(() => {
        getVideos().then(
            (data) => {
                dispatch({ type: actionConst.FETCH_VIDEOS, payload: data });
            }
        ).catch((error) => {
            dispatch({
                type: actionConst.SET_SERVER_ERROR,
                payload: { type: error.name, error: true }
            })
        });
    }, [getVideos]);

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalContextProvider;
