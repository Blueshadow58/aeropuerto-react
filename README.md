# Guía Instalación Visual Studio Code y proyecto

La siguiente será una guía de instalación de nuestro editor de código Visual Studio Code en el cual realizaremos nuestro proyecto, para esto descargaremos la versión 12.6.0 de Node.js, nuestra base de datos portable la cual ya contiene datos introducidos en esta y nuestro código de VS code


## Sobre Visual Studio Code

Visual Studio Code es un editor de código fuente. Es compatible con varios lenguajes de programación y un conjunto de características que pueden o no estar disponibles para un idioma dado. Muchas de las características de Visual Studio Code no están expuestas a través de los menús o la interfaz de usuario. Más bien, se accede a través de la paleta de comandos o a través de archivos .json. La paleta de comandos es una interfaz de línea de comandos. Sin embargo, desaparece si el usuario hace clic fuera de él o presiona una combinación de teclas en el teclado para interactuar con algo que está fuera de él. Visual Studio Code es un editor de código fuente desarrollado por Microsoft para Windows , Linux y macOS. Incluye soporte para la depuración, control integrado de Git, resaltado de sintaxis, finalización inteligente de código, fragmentos y refactorización de código.


## Tabla de contenidos


<!--ts-->
   * [Requisitos Previos](#Requisitos-previos)
   * [Instalación](#Instalación)
   * [PATH](#PATH)
   * [Clonar repositorio en VS Code](#Para-clonar-nuestro-repositorio-en-Visual-Studio-Code)
   * [Descargar repositorio github](#Para-descargar-un-proyecto-de-github)
   * [Mini Servidor](#Mini-Server)
   * [CORS](#Information-about-CORS)
<!--te-->



# Requisitos previos

### Descargar e instalar Visual Studio Code
Lo primero que haremos será descargar e instalar el software [Visual Studio Code](https://code.visualstudio.com/Download), al momento de estar realizando la instalación tenemos que asegurarnos que la opción "agregar a PATH" se encuentre seleccionada, al no seleccionar este apartado tendremos que realizarlo manualmente, véase [PATH](#PATH) para mas información.

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

En VS code presionaremos las siguientes teclas "ctr + shift + p", ahí escribiremos lo siguiente "Git: Clone", en el siguiente campo de texto escribiremos nuestra URL del proyecto
<img src="">


### PATH

PATH es una variable de entorno de los sistemas de Microsoft, en ella se especifican las rutas en las cuales el intérprete de comandos debe buscar los programas a ejecutar. En el caso que al instalar VS code no hayamos seleccionado dicha casilla, tendremos que realizarlo manualmente, para ello siga los siguientes pasos.

Lo primero que haremos será realizar la siguiente combinación de teclas "win + r"

<img src="">

Una vez hecho esto escribiremos lo siguiente "systempropertiesremote.exe" lo que nos abrirá la siguiente ventana

<img src="">

Haremos click en la ventana de "Opciones avanzadas" la cual nos mostrará lo siguiente

<img src="">

Haremos click en el botón "Variables de entorno", aquí haremos click en nueva y escribiremos lo siguiente y hacemos click en aceptar

    Nombre de la variable: "PATH"
    Valor de la variable "La dirección de la carpeta node"


### Mini Server
En este caso en la carpeta de nuestro mini server abriremos el archivo "mysql_start", una vez abierto escribiremos lo siguiente "mysql --user=root --password=root". Ahora tendremos acceso a nuestra base de datos y podremos realizar consultas en esta
<img src="">


### Information about CORS
https://alfilatov.com/posts/run-chrome-without-cors/

Iremos al directorio de nuestro proyecto react y copiaremos la dirección, en mi caso será "C:\Users\Top\Aero\aeropuerto-react"
Luego abriremos la consola
"win + r"
"cmd"
Ahí haremos un "cd" y copiaremos la direccion de nuestro directorio
cd C:\Users\Top\Aero\aeropuerto-react
Una vez hecho esto ingresaremos lo siguiente lo que nos abrirá nuestro buscador
"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp


# Instalación












descargar visual estudio code		https://code.visualstudio.com/Download
descargar node.js			https://nodejs.org/es/
netbeans codigo aeropuerto		https://github.com/Blueshadow58/aeropuerto-java	
Copiar base de datos			
Copiar de github proyecto react		


- Ir a https://github.com/Blueshadow58/aeropuerto-react
- Clone or download
- copiar url
- en visual studio code ctrl + shift + p
- Git: Clone
- Copiar ahí la URL



Abrir mini server (mysql_start)





Abrir chrome 

Copiar en cmd
"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp

ir a la carpeta del proyecto react

cd C:\Users\19817702-4\Aero\aeropuerto-react (donde esté el proyecto)

npm install foundation-sites

npm start














This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
