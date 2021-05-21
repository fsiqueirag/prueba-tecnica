import { useEffect, useState, useRef } from 'react';

export const useFetch = (url) => {

    const isMounted = useRef(true);

    const [state, setstate] = useState({ data: null, loading: true });

    // Cambiar el estado de isMounted a false si el componente fue desmontando

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])


    useEffect(() => {

        // Definir el estado inicial antes de hacer la petición a la API

        setstate({
            data: null,
            loading: true,
        });

        // Hacer la petición

        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                // Sólo actualizar el estado si el componente está montado

                if (isMounted.current) {
                    setstate({
                        loading: false,
                        data
                    })
                } else {
                    console.log('setState no se llamó');
                }
            })
            .catch(err => console.log(err))
    }, [url]);

    return state;
}