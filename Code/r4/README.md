Web creada con React para prueba técnica de MD Digital Solutions. Se decidió usar React ya que facilita y simplifica enormemente tanto la escritura como la lectura del código, además de mejorar el rendimiento de las modificaciones del DOM.

Se utiliza un custom hook (useFetch) para facilitar la obtención de los datos de la API.

# Uso del useFetch

Ejemplo:

```
    const url = 'endpoint de una api';
    const {data: null, loading: true} = useFetch(url);
```

De ser necesario, ejecutar el comando ```npm install``` para instalar los módulos necesarios para ejecutar la aplicación.