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

1. Descargar repositorio ejecutando desde terminal:

```` bash
git clone https://github.com/facualex/REST_SOAP_RCD_G2.git
````

> Como alternativa puedes simplemente descargar el .zip desde el repositorio de github y descomprimirlo en tu computador

2. Copiar la carpeta llamada "restService" dentro de la carpeta web pública del servidor de apache ya sea htdocs, www, etc (dependiendo de tu instalación de apache).

> Para el caso de esta guia se copió en ***htdocs/RCD_GRUPO2/restService*** pero puede ser copiada en otro path. Para ello se debe ajustar una variable de entorno en el cliente en los siguientes pasos.

3. Debemos ajustar una variable de entorno del cliente para que sepa la ruta donde quedó instalado el servicio. Para esto navegar desde un terminal hasta la carpeta REST_SOAP_RCD_G2/clients/clientforrest:

```` bash
cd REST_SOAP_RCD_G2/clients/clientforrest # en Linux

chdir REST_SOAP_RCD_G2/clients/clientforrest # en cmd de Windows 
````

Una vez dentro encontraremos un archivo **.env** (es un archivo oculto, se recomienda abrirlo en VS Code o algun editor de código para visualizarlo). Ajustar la variable de entorno llamada *"REACT_APP_API_URI"* con la ruta donde fue instalado el servicio en el paso 2.


*archivo REST_SOAP_RCD_G2/clients/clientforrest/.env*
````bash
# En el caso de esta guía, el servicio fue instalado en htdocs/RCD_GRUPO2/restService, por lo tanto se debe ajustar de la siguiente manera:

REACT_APP_API_URI = http://localhost:80/RCD_GRUPO2/restService/api/rest

# En su forma general es: REACT_APP_API_URI=http://localhost:[puertoDondeCorreApache]/[path/of/api]/api/rest

# Donde [puertoDondeCorreApache] puede variar dependiendo de la instalación de Apache de tu computador

# Y [path/of/api] puede variar dependiendo en la carpeta y/o subcarpetas en donde pegues la carpeta restService dentro de la carpeta htdocs (o www) de Apache
````

4. Una vez ajustada la variable de entorno del cliente, siguiendo dentro de la carpeta REST_SOAP_RCD_G2/clients/clientforrest se debe ejecutar el siguiente comando para realizar un build de producción con la variable de entorno ajustada correctamente:


````
npm run build
````

Esto creará una carpeta build en REST_SOAP_RCD_G2/clients/clientforrest/build. El contenido de esta carpeta es el que se debe copiar y pegar en el servidor Apache. Para el caso de esta guia se copiará en ***htdocs/RCD_GRUPO2/restClient***

5. Listo! La aplicación estará corriendo en localhost/RCD_GRUPO2/restClient (o el path que hayas escogido)

## SOAP API + Cliente Nombres 
