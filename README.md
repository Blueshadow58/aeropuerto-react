# Guía Instalación Visual Studio Code y proyecto

La siguiente será una guía de instalación de nuestro editor de código Visual Studio Code en el cual realizaremos nuestro proyecto, para esto descargaremos la versión 12.6.0 de Node.js, nuestra base de datos portable la cual ya contiene datos introducidos en esta y nuestro código de VS code


## Sobre Visual Studio Code

Visual Studio Code es un editor de código fuente. Es compatible con varios lenguajes de programación y un conjunto de características que pueden o no estar disponibles para un idioma dado. Muchas de las características de Visual Studio Code no están expuestas a través de los menús o la interfaz de usuario. Más bien, se accede a través de la paleta de comandos o a través de archivos .json. La paleta de comandos es una interfaz de línea de comandos. Sin embargo, desaparece si el usuario hace clic fuera de él o presiona una combinación de teclas en el teclado para interactuar con algo que está fuera de él. Visual Studio Code es un editor de código fuente desarrollado por Microsoft para Windows , Linux y macOS. Incluye soporte para la depuración, control integrado de Git, resaltado de sintaxis, finalización inteligente de código, fragmentos y refactorización de código.


## Tabla de contenidos


<!--ts-->
   * [Requisitos Previos](#Requisitos-previos)
   * [Descargar repositorio github](#Para-descargar-un-proyecto-de-github)
   * [Clonar repositorio en VS Code](#Para-clonar-nuestro-repositorio-en-Visual-Studio-Code)
   * [PATH](#PATH)
   * [Mini Servidor](#Mini-Server)
   * [CORS](#CORS)
   * [Foundation](#Foundation-CSS)
<!--te-->



# Requisitos previos

### Descargar e instalar Visual Studio Code
Lo primero que haremos será descargar e instalar el editor de código [Visual Studio Code](https://code.visualstudio.com/Download), al momento de estar realizando la instalación tenemos que asegurarnos que la opción "agregar a PATH" se encuentre seleccionada, al no seleccionar este apartado tendremos que realizarlo manualmente, véase [PATH](#PATH) para mas información.

<img src="https://raw.githubusercontent.com/Blueshadow58/aeropuerto-react/master/Imagenes%20github/PATH/Screenshot_6.png">

### Descargar e instalar Node.js
Una vez que ya tenemos instalado Visual Studio Code descargaremos [Node.js (12.6.0)](https://nodejs.org/es/)

### Descargar Mini server
Cuando ya hayamos descargado e instalado Node.js procederemos a descargar nuestra base de datos portable [Mini server](https://github.com/JoanneCentos/Mini-Server) y descomprimirlo respectivamente, una vez hecho esto nuestra base de datos está lista para trabajar

### Descargar Codigo Aeropuerto
Lo ultimo que haremos será descargar nuestro proyecto de VS code el cual ya se encuentra funcional [Aeropuerto](https://github.com/Blueshadow58/aeropuerto-java), en caso que no sepa como descargar un proyecto desde github concurra al siguiente paso primero


### Para descargar un proyecto de github
Lo primero que haremos será ir a cualquier repositorio github, a partir de ahí haremos click en "Clone or Download"

<img src="https://raw.githubusercontent.com/Blueshadow58/aeropuerto-react/master/Imagenes%20github/Descargar%20repositorio%20desde%20github/Screenshot_1.png">

Luego seleccionaremos la opción "Download ZIP"

<img src="https://raw.githubusercontent.com/Blueshadow58/aeropuerto-react/master/Imagenes%20github/Descargar%20repositorio%20desde%20github/Screenshot_2.png">


### Para clonar nuestro repositorio en Visual Studio Code
Para clonar nuestro repositorio en Visual Studio Code será necesario ir a nuestro proyecto github, donde haremos click en el botón "Clone or download"

<img src="https://raw.githubusercontent.com/Blueshadow58/aeropuerto-react/master/Imagenes%20github/Clonar%20repositorio%20desde%20github%20a%20VSC/Screenshot_1.png">

Luego haremos click en el boton al lado de la URL

<img src="https://raw.githubusercontent.com/Blueshadow58/aeropuerto-react/master/Imagenes%20github/Clonar%20repositorio%20desde%20github%20a%20VSC/Screenshot_2.png">

En VS code presionaremos las siguientes teclas "ctr + shift + p", ahí escribiremos lo siguiente "Git: Clone"

<img src="https://raw.githubusercontent.com/Blueshadow58/aeropuerto-react/master/Imagenes%20github/PATH/Screenshot_4.png">

En el siguiente campo de texto escribiremos nuestra URL del proyecto

<img src="https://raw.githubusercontent.com/Blueshadow58/aeropuerto-react/master/Imagenes%20github/PATH/Screenshot_5.png">


### PATH

#### Sobre PATH
PATH es una variable de entorno de los sistemas de Microsoft, en ella se especifican las rutas en las cuales el intérprete de comandos debe buscar los programas a ejecutar. En el caso que al instalar VS code no hayamos seleccionado dicha casilla, tendremos que realizarlo manualmente, para ello siga los siguientes pasos.

Lo primero que haremos será realizar la siguiente combinación de teclas "win + r"

<img src="https://raw.githubusercontent.com/Blueshadow58/aeropuerto-react/master/Imagenes%20github/PATH/Screenshot_1.png">

Una vez hecho esto escribiremos lo siguiente "systempropertiesremote.exe" lo que nos abrirá la siguiente ventana, haremos click en la ventana de "Opciones avanzadas" la cual nos mostrará lo siguiente

<img src="https://raw.githubusercontent.com/Blueshadow58/aeropuerto-react/master/Imagenes%20github/PATH/Screenshot_2.png">

Haremos click en el botón "Variables de entorno", aquí haremos click en nueva y escribiremos lo siguiente y hacemos click en aceptar

    Nombre de la variable: "PATH"
    Valor de la variable "La dirección de la carpeta node"

<img src="https://raw.githubusercontent.com/Blueshadow58/aeropuerto-react/master/Imagenes%20github/PATH/Screenshot_3.png">


### Mini Server
Si ya descargamos nuestra base de datos portable, procederemos a abrir la carpeta donde abriremos el archivo "mysql_start" 

<img src="https://raw.githubusercontent.com/Blueshadow58/aeropuerto-react/master/Imagenes%20github/Mini%20Server/Screenshot_3.png">

Una vez abierto escribiremos lo siguiente "mysql --user=root --password=root". Ahora tendremos acceso a nuestra base de datos y podremos realizar consultas en esta

<img src="https://raw.githubusercontent.com/Blueshadow58/aeropuerto-react/master/Imagenes%20github/Mini%20Server/Screenshot_1.png">


### CORS

#### Sobre CORS
El intercambio de recursos de origen cruzado o CORS (Cross-origin resource sharing, en sus siglas en inglés) es un mecanismo que permite que se puedan solicitar recursos restringidos (como por ejemplo, las tipografías) en una página web desde un dominio fuera del dominio que sirvió el primer recurso. CORS define una forma en la cual el navegador y el servidor pueden interactuar para determinar si es seguro permitir una petición de origen cruzado. Esto permite tener más libertad y funcionalidad que las peticiones de mismo origen, pero es adicionalmente más seguro que simplemente permitir todas las peticiones de origen cruzado.

El primer paso será mediante el comando "win + r" abrir nuestro cmd introduciendo "cmd" en el campo de texto. Ahí haremos un "cd" y copiaremos la direccion de nuestro proyecto, en nuestro caso será la siguiente

    cd C:\Users\Top\Aero\aeropuerto-react
    
Una vez hecho esto ingresaremos lo siguiente lo que nos abrirá nuestro buscador
"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp

### Foundation CSS

#### Sobre Foundation
Foundation es un framework de interfaz de usuario responsive. Foundation proporciona una cuadrícula responsive e incluye componentes de interfaz de usuario HTML y CSS, plantillas, y fragmentos de código, incluyendo tipografía, formularios, botones, barras de navegación y otros componentes de interfaz usuario, así como extensiones de JavaScript opcionales. Foundation está mantenida por zurb.com y es un proyecto de código abierto.

Si realizamos los pasos anteriores correctamente en la misma consola con la que accedimos al directorio de nuestro proyecto utilizaremos los siguientes comandos con lo que agregaremos Foundation a nuestro proyecto y luego lo iniciaremos

    npm install foundation-sites
    npm start

