export function validarCodigo(input){
    let expReg = /^([\d]{3})$/;
    if(expReg.test(input.value)){
        input.className = 'form-control is-valid';
    }else{
        input.className = 'form-control is-invalid';
    }
}
export function validarTitulo(input){
    let expReg = /^([A-Z]{3,40})\w+$/;
    if(expReg.test(input.value)){
        input.className = 'form-control is-valid';
    }else{
        input.className = 'form-control is-invalid';
    }
}
export function validarDescripcion(input){
    let expReg = /^([A-Z]{20,300})\w+$/;
    if(expReg.test(input.value)){
        input.className = 'form-control is-valid';
    }else{
        input.className = 'form-control is-invalid';
    }
}
export function validarImagen(input){
    let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if(expReg.test(input.value)){
        input.className = 'form-control is-valid';
    }else{
        input.className = 'form-control is-invalid';
    }
}
export function validarGenero(input){
    let genero = document.getElementById('genero')
    let valorGenero = genero.value
    if(valorGenero){
        input.className = 'form-control is-valid';
    }else{
        input.className = 'form-control is-invalid';
    }
}
export function cantidadCaracteres(input){
if( input.value.length >= 3){
    console.log('dato valido');
    input.className = 'form-control is-valid'
}else{
    console.log('dato invalido');
    input.className = 'form-control is-invalid'
}
}