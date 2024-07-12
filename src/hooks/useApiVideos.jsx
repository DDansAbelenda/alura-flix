import { useCallback } from "react";

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
        try {
            const response = await fetch(url, options);
            const data = await response.json();
            return data;
        } catch (err) {
            //setError(err);
            //throw err;
            console.log(err);
        } finally {
            //setLoading(false);
        }
    }

    //Obtener todos los videos
    const getVideos = useCallback(async () => {
        const response = await request(
            'http://localhost:3000/videos',
            { method: 'GET' }
        );
        return response;
    }, []);

    //Obtener todas las categorías
    const getCategorias = useCallback(async () => {
        const response = await request(
            'http://localhost:3000/categorias',
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
        const response = await request('http://localhost:3000/videos', options);
        return response
    }, []);

    const putVideo = useCallback(async (video) => {
        const options = {
            method: 'PUT',
            body: JSON.stringify(video),
            headers: { 'Content-Type': 'application/json' }
        }
        const response = await request(`http://localhost:3000/videos/${video.id}`, options);
        return response;
    }, []);

    const deleteVideo = useCallback(async (id) => {
        const options = {
            method: 'DELETE',
        }
        const response = await request(`http://localhost:3000/videos/${id}`, options);
        return response;
    }, []);


    return { getCategorias, getVideos, postVideo, putVideo, deleteVideo }
    //const post = useCallback((url, body) => request(url, { method: 'POST', body: JSON.stringify(body), headers: { 'Content-Type': 'application/json' } }), [request]);
    //const put = useCallback((url, body) => request(url, { method: 'PUT', body: JSON.stringify(body), headers: { 'Content-Type': 'application/json' } }), [request]);
    //const del = useCallback((url) => request(url, { method: 'DELETE' }), [request]);
    //return { data, loading, error, get, post, put, del };
}

