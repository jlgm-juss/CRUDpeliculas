import Pelicula from './app.js';
import{validarCodigo, validarTitulo, validarDescripcion, validarGenero, validarImagen} from './helpers.js';

let listaPeliculas = JSON.parse(localStorage.getItem('listaPeliculasKey')) || [];

const modalFormPelicula = new bootstrap.Modal(document.querySelector('#modalPelicula'));
const btnCrearPelicula = document.querySelector('#btnCrearPelicula');
let formulario = document.getElementById('formPelicula')
let codigo = document.getElementById('codigo');
let titulo = document.getElementById('titulo');
let descripcion = document.getElementById('descripcion');
let genero = document.getElementById('genero');
let imagen = document.getElementById('imagen');
//let enviar = document.getElementById('enviar');

//aqui voy agregando los eventos

//formulario.addEventListener('formulario');
btnCrearPelicula.addEventListener('click', mostrarFormulario);
formulario.addEventListener('submit', crearPelicula)
codigo.addEventListener('blur', ()=>{validarCodigo(codigo)});
titulo.addEventListener('blur',()=>{validarTitulo(titulo)});
descripcion.addEventListener('blur',()=>{validarDescripcion(descripcion)});
genero.addEventListener('blur',()=>{validarGenero(genero)});
imagen.addEventListener('blur',()=>{validarImagen(imagen)});
//enviar.addEventListener('submit', crearPelicula);

function mostrarFormulario(){
    modalFormPelicula.show();
    codigo.value = uuidv4();
}


function crearPelicula(e){
    e.preventDefault();
    const nuevaPelicula = new Pelicula(
    codigo.value,
    titulo.value,
    descripcion.value,
    genero.value,
    imagen.value,
    );
    console.log(nuevaPelicula);
    //guardar la pelicula en el arreglo
    listaPeliculas.push(nuevaPelicula);
    console.log(listaPeliculas);
    //guardar los datos el localstorage
    guardarDatosEnLS();
    //limpiar el formulario
    limpiarFormulario();
    //cerrar la ventana modal
    modalFormPelicula.hide();
}
    //reseteo datos del formulario
    function limpiarFormulario(){
        formulario.reset();
        //resetear la clase de bootstrap form-control
    }

    function guardarDatosEnLS(){
        localStorage.setItem('listaPeliculasKey', JSON.stringify(listaPeliculas))
    }


