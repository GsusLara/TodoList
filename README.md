# plantilla

# Requerimientos 
- Asegurate de usar una version de node superior a la 14

# iniciar un nuevo proyecto basado en este boilerplate

1. cambia los datos del proyecto y repositorio en el archivo package.json

2. instala los paquetes
$ npm install

3. crea la variable de entorno 
$ cp .env.example .env

4. inicia el servidor web para la vista previa de tus cambios
$ npm run start


# Descripcion
Esta plantilla se basa en componentes funcionales de react,utiliza la arquitectura Flux para el manejo y flujo de datosa entre los componentes
 estos se pueden escontrar en el directorio /src/js/store, en archivo appContext.js, no se modifica, las acciones y las variables globales se trabajan dentro de flux.js en los objetos, store y actions


