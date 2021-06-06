# Instrucciones para ejecutar las aplicaciones 

- REST API: PHP
- Cliente para consumir REST: ReactJS

# Prerequisitos

- PHP 7.3
- Apache 2.4
- NodeJS v15.0.1 (se utilizará para hacer build de los clientes en caso de cambiar las variables de entorno que le indican a los clientes la URI de las API'S)
- npm 7.0.3 (node package manager necesario en caso de necesitar cambiar las variables de entorno y hacer "rebuild" de los clientes)

# Instrucciones

## Rest API + Cliente Calculadora de RUT y Split de Nombres

1. Descargar repositorio ejecutando desde terminal:

```` bash
git clone https://github.com/facualex/REST_SOAP_RCD_G2.git
````

> Como alternativa puedes simplemente descargar el .zip desde el repositorio de github y descomprimirlo en tu computador

2. Copiar la carpeta llamada "restService" dentro de la carpeta web pública del servidor de apache donde se exponen tus aplicaciones web ya sea htdocs, www, etc (dependiendo de tu instalación de apache).

> Para el caso de esta guia se copió en ***htdocs/RCD_GRUPO2/restService*** pero puede ser copiada en otro path. Para ello se debe ajustar una variable de entorno en el cliente como se verá en los siguientes pasos.

> **IMPORTANTE**: La carpeta "restService" donde se encuentra la API rest utiliza archivos de Apache .htaccess. Para que la aplicación funcione correctamente es necesario que el modulo de apache "mod_rewrite" esté instalado y habilitado. La ubicación del archivo .conf donde se habilita este servicio va a depender de tu instalación de Apache ya que no siempre se encuentra en la misma ubicación. Puedes buscar este archivo dentro de la carpeta donde está instalado apache buscando "*.conf" en el buscador de archivos de Windows (o otro SO). Generalmente el archivo tiene el nombre "httpd.conf". Dentro de "httpd.conf" buscar la siguiente linea:

````apache
#LoadModule rewrite_module modules/mod_rewrite.so

# Si esa linea está comentada, descomentarla eliminando el simbolo "#"
LoadModule rewrite_module modules/mod_rewrite.so
````

> Una vez descomentada la linea anterior, se debe buscar la siguiente linea y asegurarse que tenga las siguientes configuraciones:

````apache
# Buscar el directorio donde se encuentran la carpeta pública donde Apache expone las aplicaciones
## Puede ser /var/www, /htdocs, etc. Dependiendo de tu instalación de Apache. Lo importante es que sea la carpeta pública de tu instalación.

<Directory /var/www/> 
    Options Indexes FollowSymLinks
    AllowOverride All
    Require all granted
</Directory>
````

> Una vez realizadas las modificaciones anteriores, guardar el archivo "httpd.conf" y continuar con la guía

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

## SOAP API + Clientes

### Prerequisitos	
	- XAMPP (o cualquier instancia para subir app a entornos web's)
	- Tomcat 8.0.32
	- JDK 8 (Esto es necesario para correr el servidor de tomcat)


1.  Descargar y descomprimir el servidor de tomcat 8.0.32 en su disco local. (en este caso estará en C:\apache-tomcat-8.0.3	2)
2. Instalar el JDK 8 y seguir los pasos (en este caso estara instalado en C:\Program Files\Java\jdk1.8.0_291 )
3. Ahora es necesario inicializar el servidor de tomcat, para esto es necesario editar y agregar algunas variables de entorno.

> 

 	    *Para agregar las variables de entorno, es necesario ir a:
		1.- propiedades del sistema -> variables de entorno...
		2.- Nueva...
		3.- En nombre de variable agregaremos "CATALINA_HOME", y en el valor de la variable pondremos la direccion en donde se extrajo tomcat,
		    en este caso, C:\apache-tomcat-8.0.32. le damos aceptar.
		4.- Nueva...
		5.- En nombre de variable agregaremos "JAVA_HOME", y en el valor de la variable pondremos la direccion en donde se instalo el JDK 8,
		    en este caso, C:\Program Files\Java\jdk1.8.0_291. Le damos aceptar.
		6.- Buscamos la variable con el nombre "Path", y Editar...
		7.- boton Nuevo.
		8.- y agregamos "%CATALINA_HOME%\bin" sin las comillas.
		9.- aceptamos y aceptar, finalmente podremos inicializar nuestro servidor a traves de nuestro simbolo del sistema.

4. Inicializamos nuestro simbolo del sistema y nos trasladamos a la carpeta del tomcat y dentro de esta a la carpeta bin.
		1.- cd C:\
		2.- cd apache-tomcat-8.0.32
		3.- cd bin
		4.- catalina.bat start

5. Finalmente nuestro servidor estara corriento en localhost:8080
6. entramos a esta desde nuestro navegador web y vamos a Manager APP
7. ingresamos el usuario y clave por defecto
8. buscamos la seccion de agregar archivos de tipo WAR, selecciamos el archivo WSRUT.war y le damos a desplegar.
		8.1- Nos fijamos que en este en "TRUE" en ejecutandose nuestra app
9. finalmente el webservice de tipo SOAP estara ejecutandose en el servidor Tomcat 8.0 
10. ahora copiar la carpeta T1REDES-SOAPCLIENT en C:\xampp\htdocs
11. inicalizar el servicio de apache del XAMPP
12. en nuestro navegador ir a la URL: localhost\T1REDES-SOAPCLIENT
13. Listo!

### Otra forma de instalación

En el caso de que no se quiera instalar el servidor de tomcat, para saltarnos el entorno de variables, en este caso utilziaremos solamente XAMPP


1. Instalar XAMPP y seguir todas las instrucciones
2. Copiar el WSRUT.war y la carpeta WSRUT en C:\xampp\tomcat\webapps
3. copiar la carpeta T1REDES-SOAPCLIENT en C:\xampp\htdocs
4. inicalizar el servicio de apache y tomcat del XAMPP
5. en nuestro navegador ir a la URL: localhost\T1REDES-SOAPCLIENT
6. Listo!

