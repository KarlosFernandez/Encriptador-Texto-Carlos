const cajaTexto = document.querySelector('.cajaTexto');
const mensaje = document.querySelector('.mensaje');
const texto1 = document.querySelector('.texto1');
const texto2 = document.querySelector('.texto2');
const botonCopiar = document.querySelector(".btn-copiar");

/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function btnEncriptar(){
    const textoEncriptado = encriptar(cajaTexto.value);
    mensaje.value = textoEncriptado;
    cajaTexto.value = "";
    mensaje.style.backgroundImage = "none";
    ocultar();
}

function encriptar(textoEncriptado){
    //Se define la matriz con los codigos a reemplazar
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    //console.table(matrizCodigo);
    //Convierte toda el texto de la caja en minúsculas
    textoEncriptado = textoEncriptado.toLowerCase();
    //Iterar o repetir el ciclo for mientras la condición se cumpla
    for (let i=0; i < matrizCodigo.length; i++){
        //Se obtiene el carácter a reemplazar
        let codigoVocal = matrizCodigo[i][0];
        //Se obtiene el código para reemplazar
        let codigoRemplazo = matrizCodigo[i][1];
        
        //Se verifica si el texto ingresado tiene la vocal a reemplazar
        if (textoEncriptado.includes(codigoVocal)){
            //Reemplazar todas las vocales que encuentre por el código de reemplazo
            textoEncriptado = textoEncriptado.replaceAll(codigoVocal, codigoRemplazo);
        }
    }
    return textoEncriptado;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(cajaTexto.value);
    mensaje.value = textoDesencriptado;
    cajaTexto.value = "";
    ocultar();
}

function desencriptar(textoDesencriptado){
    //Se define la matriz con los codigos a reemplazar
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    //console.table(matrizCodigo);
    //Convierte toda el texto de la caja en minúsculas
    textoDesencriptado = textoDesencriptado.toLowerCase();
    //Iterar o repetir el ciclo for mientras la condición se cumpla
    for (let i=0; i < matrizCodigo.length; i++){
        //Se obtiene el código encriptado a reemplazar
        let codigoEncriptado = matrizCodigo[i][1];
        //Se obtiene el carácter para reemplazar
        let caracterRemplazo = matrizCodigo[i][0];
        
        //Se verifica si el texto ingresado tiene la vocal a reemplazar
        if (textoDesencriptado.includes(codigoEncriptado)){
            //Reemplazar todas los códigos encriptados que encuentre por los caracteres de reemplazo
            textoDesencriptado = textoDesencriptado.replaceAll(codigoEncriptado, caracterRemplazo);
        }
    }
    return textoDesencriptado;
}
function btnCopiar(){
    let textoCopiar = mensaje.value;
    console.log(textoCopiar);
    navigator.clipboard.writeText(textoCopiar);
    mensaje.value = "";
    mostrar();
}

function ocultar(){
    botonCopiar.style.display = "";
    mensaje.style.backgroundImage = "none";
    texto1.style.display = "none";
    texto2.style.display = "none";
}

function mostrar(){
    botonCopiar.style.display = "";
    mensaje.style.background = "";
    texto1.style.display = "";
    texto2.style.display = "";
}