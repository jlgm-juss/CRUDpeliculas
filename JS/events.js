import Pelicula from './app.js';
import{validarCodigo, validarTitulo, validarDescripcion, validarGenero, validarImagen} from './helpers.js';

let formulario = document.getElementById('formulario')
let codigo = document.getElementById('codigo');
let titulo = document.getElementById('titulo');
let descripcion = document.getElementById('descripcion');
let genero = document.getElementById('genero');
let imagen = document.getElementById('imagen');
let enviar = document.getElementById('enviar');

//aqui voy agregando los eventos

//formulario.addEventListener('formulario');
codigo.addEventListener('blur', ()=>{validarCodigo(codigo)});
titulo.addEventListener('blur',()=>{validarTitulo(titulo)});
descripcion.addEventListener('blur',()=>{validarDescripcion(descripcion)});
genero.addEventListener('blur',()=>{validarGenero(genero)});
imagen.addEventListener('blur',()=>{validarImagen(imagen)});
//enviar.addEventListener('submit', crearPelicula);

formulario.addEventListener('submit', e=> {
    e.preventDefault();

    if(codigo.value.length < 3){
alert('codigo inexistente')
    }
    })
    console.log('tengo que crear la pelicula');

    const nuevaPelicula = new Pelicula(
    codigo.value,
    titulo.value,
    descripcion.value,
    genero.value,
    imagen.value,
    );
    console.log(nuevaPelicula);
    //reseteo datos del formulario
    formulario.reset();




