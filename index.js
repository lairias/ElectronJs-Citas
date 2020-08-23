//Requiremos algunas dependencias de electron
const {app, BrowserWindow} = require('electron')

let appWindow;

//Funcion que contiene la configuracion de app de escritorio
function crearVentana(){
    //Esto nos crea una nueva ventana 
appWindow = new BrowserWindow({

})

//cuendo cerramos la app elimine la memoria de la laptop
appWindow.on('closed',()=>{
    appWindow=null;//con null cerramos la ventana
})

//cuando la app este lista, muestra la ventana
appWindow.on('ready-to-show',()=>{
    appWindow.show();//muestra una nueva ventana
})
//---------------------------------Cargar los archivos Html y css
appWindow.loadFile('./index.html')

}

//con app.on le pasoamos las configuracion a electron
app.on('ready',crearVentana)