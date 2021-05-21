import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import { useFetch } from './hooks/useFetch';


export const R4 = () => {

    // Configuración Loader Spinner

    const spinnerStyle = css`
    display: block;
    margin: 50vh auto;
    `;

    // Hacer fetch para obtener la data y el estado de loading

    const url ='https://restcountries.eu/rest/v2/all';
    const {data, loading} = useFetch(url);

    // Limitar el número de paises a utilizar en la tabla

    const countriesData = data?.slice(20, 26);

    const params = ['País', 'Capital', 'Territorio', 'Nombre nativo', 'Población', 'Gentilicio']


    return (
        <>

            {/* Renderizar tabla cuando termine de hacer el fetch */}

            {
                loading
                ?
                <ClipLoader css={spinnerStyle}/>
                :
                <main>
                    <table>
                        <thead>

                            {/* Renderizar heads */}

                            <tr>
                                {
                                    params.map((param, index) => (
                                        <th key={index}>
                                            <div className="th-content">
                                                {param}
                                                <span className="fas fa-exchange-alt fa-rotate-90"></span>
                                            </div>
                                        </th>
                                    ))
                                }
                            </tr>

                        </thead>

                        <tbody>

                            {/* Renderizar datos */}

                            {
                                countriesData.map(country => (
                                    <tr key={country.numericCode}>
                                        <td>{country.name}</td>
                                        <td>{country.capital}</td>
                                        <td>{country.area} km²</td>
                                        <td>{country.nativeName}</td>
                                        <td>{country.population}</td>
                                        <td>{country.demonym}</td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </main>
            }

        </>
    )
}
