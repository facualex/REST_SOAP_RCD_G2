# Instrucciones para ejecutar las aplicaciones 

- REST API: PHP
- Cliente para consumir REST: ReactJS

# Prerequisitos

- PHP 7.3
- Apache 2.4
- NodeJS v15.0.1 (se utilizará para hacer build de los clientes en caso de cambiar las variables de entorno que le indican a los clientes la URI de las API'S)
- npm 7.0.3 (node package manager necesario en caso de necesitar cambiar las variables de entorno y hacer "rebuild" de los clientes)

# Instrucciones

## Rest API + Cliente Calculadora de RUT

 1 - Subir la carpeta "restService" a la carpeta htdocs de Apache

 2 - El cliente calculador de RUT asume que la API se encuentra en http://localhost:8888/restService/api/rest, es decir que fue subida directamente a la carpeta de Apache htdocs/restService. En caso de no estar en esa URI se debe modificar la variable de entorno (archivo .env) que se encuentra dentro de "clients/clientforrest/.env" llamada REACT_APP_API_URI de la siguiente forma:

.env
````
REACT_APP_API_URI=http://localhost:[puertoApache]/[path/of/api]/api/rest
````

Donde "[path/of/api]" debe ser reemplazado por la ubicación de la carpeta de la API dentro de htdocs
y "[puertoApache]" por el puerto donde esté corriendo el servidor apache.

3. Si la carpeta "restService" se subió bajo ese nombre directamente en htdocs/restService, entonces el build que está en clients/clientforrest/build se puede subir directamente a htdocs/restClient (o el nombre que elijas)

4. En caso de que se modifique la ruta dentro de htdocs donde se instaló la carpeta "restService" se debe seguir el paso 2. Tras esto, se debe volver a builder el cliente (para que modifique las variables de entorno). Esto se logra ejecutando el siguiente comando dentro de la carpeta "clients/clientforrest":

````
npm run build
````

Tras finalizar el build, se debe subir todo lo que está en la carpeta "clients/clientforrest/build" a la carpeta htdocs de Apache

## SOAP API + Cliente Nombres 
