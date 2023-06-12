function encriptar(){

    var texto = document.getElementById("txtEncriptado").value.toLowerCase();

    var txtEncriptado = texto.replace(/e/img, "enter");
    var txtEncriptado = txtEncriptado .replace(/o/img, "ober");
    var txtEncriptado = txtEncriptado .replace(/i/img, "imes");
    var txtEncriptado = txtEncriptado .replace(/a/img, "ai");
    var txtEncriptado = txtEncriptado .replace(/u/img, "ufat");

    document.getElementById("txtDesencriptado").innerHTML = txtEncriptado;

    document.getElementById("botonCopiar").style.display="show";
    document.getElementById("botonCopiar").style.display="inherit";

}

function desencriptar(){

    var texto = document.getElementById("txtEncriptado").value.toLowerCase();

    var txtEncriptado = texto.replace(/enter/img, "e");
    var txtEncriptado = txtEncriptado .replace(/ober/img, "o");
    var txtEncriptado = txtEncriptado .replace(/imes/img, "i");
    var txtEncriptado = txtEncriptado .replace(/ai/img, "a");
    var txtEncriptado = txtEncriptado .replace(/ufat/img, "u");

    document.getElementById("txtDesencriptado").innerHTML = txtEncriptado;

}

function copiar(){

var contenido = document.querySelector("#txtDesencriptado");

contenido.select();
document.execCommand("copy");

}