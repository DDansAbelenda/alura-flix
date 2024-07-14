import { useCallback } from "react";

//const baseUrl = 'http://localhost:3000'; //local 
const baseUrl = 'https://alura-flix-api-six.vercel.app'; //api vercel 

/**
 * Este hook devuelve funciones que te permiten conectar con una API de videos.
 * A partir de dichas funciones puedes obtener todos los videos y categorías y
 * demás solicitudes que necesites. 
 */
export const useApiVideos = () => {
    // Función request genérica que a partir de una url y un cuerpo de opciones
    // realiza una petición a la api, la respuesta de la api la devuelve y además
    // utilizando el dispatch del reducer enviado al hook por parámetros este cambia
    // el estado 
    const request = async (url, options = {}) => {
        //setLoading(true);
        //setError(null);
        const response = await fetch(url, options);
        const data = await response.json();
        return data;

    }

    //Obtener todos los videos
    const getVideos = useCallback(async () => {
        const response = await request(
            `${baseUrl}/videos`,
            { method: 'GET' }
        );
        return response;
    }, []);

    //Obtener todas las categorías
    const getCategorias = useCallback(async () => {
        const response = await request(
            `${baseUrl}/categorias`,
            { method: 'GET' }
        );
        return response;
    }, []);

    const postVideo = useCallback(async (video) => {
        const options = {
            method: 'POST',
            body: JSON.stringify(video),
            headers: { 'Content-Type': 'application/json' }
        }
        const response = await request(`${baseUrl}/videos`, options);
        location.reload(); //mala practica, solo para que funcione con JSON Server
        return response
    }, []);

    const putVideo = useCallback(async (video) => {
        const options = {
            method: 'PUT',
            body: JSON.stringify(video),
            headers: { 'Content-Type': 'application/json' }
        }
        const response = await request(`${baseUrl}/videos/${video.id}`, options);
        location.reload(); //mala practica, solo para que funcione con JSON Server
        return response;
    }, []);

    const deleteVideo = useCallback(async (id) => {
        const options = {
            method: 'DELETE',
        }
        const response = await request(`${baseUrl}/videos/${id}`, options);
        location.reload(); //mala practica, solo para que funcione con JSON Server
        return response;
    }, []);


    return { getCategorias, getVideos, postVideo, putVideo, deleteVideo }
}

