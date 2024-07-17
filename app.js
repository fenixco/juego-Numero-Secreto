
//se declaran e inicializan las variables
let numeroSecreto = 0;
let numeroIntentos = 0;
let listaNumSorteados =  [];
let numeroMaximo = 10;



console.log(numeroSecreto);

//Declaracion de funciones
function asignarTextoElemento(elementoegc, textoegc){
    let elementoHtml = document.querySelector(elementoegc);
    elementoHtml.innerHTML = textoegc;
    return;
    
}


function verficarIntentoDeUsuario(){
    //alert('Bienvenido...');
    //'input' es el nombre de etiqueta de la caja de texto en archivo index.html
    //se utiliza parseInt para forzar la conversion de tipo string a number
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(numeroIntentos);
    /*console.log(typeof(numeroUsuario));
    console.log(numeroUsuario);
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    */

    //el triple igual restringe la comparacion hasta el tipo de dato
    //console.log(numeroUsuario === numeroSecreto);

 
    if (numeroUsuario === numeroSecreto) {
        //el signo de pregunta "?" equivale en el operador ternario al if 
        //los dos puntos ":" equivalen al sino, o de lo contrario
        asignarTextoElemento('p', `Felicitaciones...ACERTASTE el Número !...en ${numeroIntentos} ${(numeroIntentos == 1) ? 'intento' : 'intentos'}`);

        //aqui se inhabilita el boton intentar
        document.querySelector('#intento').setAttribute('disabled','true');

        //aqui se habilita e lboton nuevo juego
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else{
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'No acertaste...el número secreto es Menor al que ingresaste...');
        }else {
            asignarTextoElemento('p', 'No acertaste...el número secreto es Mayor al que ingresaste...');
        }

        numeroIntentos++;
        limpiarCajaTexto();
    }

    return;
}

function generarNumeroSecreto() {

    numeroIntentos = 0;
    //let numerosecreto = Math.floor(Math.random() * 10) + 1;
    //return numerosecreto;
    
    //return Math.floor(Math.random() * 10) + 1;
    let numGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(numGenerado);
    console.log(listaNumSorteados);

    //si ya se generaron todos los numeros, osea el numeroMaximo de sorteos
    if (listaNumSorteados.length == numeroMaximo) {
            asignarTextoElemento('p',`Ya se Genero el numero maximo de Sorteos de  ${numeroMaximo} ...EGC`);

            //aqui se inhabilita el boton intento
            document.querySelector('#intento').setAttribute('disabled','true');
    
    }else{
        if (listaNumSorteados.includes(numGenerado)) {
                    //si el numero generado ya ha sido generado y está en la lista
                    //se hace uso de la recursividad para llamarse en si misma la funcion
                    return generarNumeroSecreto();

        }else{
        //sino se ha jugado ese numero antes, se agrega a la lista de num jugados
        listaNumSorteados.push(numGenerado);
        return numGenerado;
        }   
    }

}



function limpiarCajaTexto() {
    //queryselector() es un selector generico; pero en el argumento se puede pasar el id de un
    //elemento input, anteponiendole el singo "#".

    //let valorCajaTexto = document.querySelector('#valorUsuario');
    //valorCajaTexto.value = '';
    document.querySelector('#valorUsuario').value = '';
}

function reiniciarJuego() {
    /* pasos a realizar para reiniciar el juego
    limpiar la caja de texto
    mostrar mensaje de inicio, intervalo de numeros
    generar numero aleatorio
    inicializar el numero de intentos
    deshabilitar boton nuevo juego
    
    */
    let numeroIntentos = 0;

    limpiarCajaTexto();
    condicionesIniciales();

    //aqui se inhabilita el boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

    //aqui se habilita e lboton intento
    document.getElementById('intento').removeAttribute('disabled');
    
    



}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del Número Secreto EGC');
    asignarTextoElemento('p',`Ingresa un numero entre 1 y ${numeroMaximo} ...EGC`);
    numeroSecreto = generarNumeroSecreto();
    numeroIntentos++;

    
}

//llamado a funcion
condicionesIniciales();
