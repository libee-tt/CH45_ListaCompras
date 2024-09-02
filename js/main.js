
const btnAgregar = document.getElementById("btnAgregar");
const txtNombre = document.getElementById("Name");
const txtNumber = document.getElementById("Number");
const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");

function validarCantidad(){
    if (txtNumber.value.length==0){
        return false;
    } //que sea mayor a 0

    if(isNaN(txtNumber.value)){
        return false;
    } // que sea número

    if (Number(txtNumber.value)<=0){
        return false;
    }

    return true;
}





// Validar la información de los campos
btnAgregar.addEventListener("click", function (event){
    event.preventDefault();
        txtNombre.style.border="";
        txtNumber.style.border="";
        alertValidacionesTexto.innerHTML="";
        alertValidaciones.style.display="none";
// Validación del nombre del producto  
    if (txtNombre.value.length<3) {
        txtNombre.style.border="solid red medium";
        alertValidacionesTexto.innerHTML="El <strong> Nombre </strong> no es correcto. <br>"
            alertValidaciones.style.display="block"
    }
// Validación de la cantidad
    if (! validarCantidad()){
        txtNumber.style.border="solid red medium";
        alertValidacionesTexto.innerHTML+="La <strong>cantidad</strong> no es correcta. <br>"
            alertValidaciones.style.display="block"
        return false;
} //!validarCantidad

    
}); //Aquí termina el btnAgregar.addEventListener

// Evento blur es cuando un campo pierde el foco
txtNombre.addEventListener("blur", function(event){
    txtNombre.value = txtNombre.value.trim();

}); //Aquí termina el txtNombre.addEventListener

txtNumber.addEventListener("blur", function(event){
    txtNumber.value = txtNumber.value.trim();

}); //Aquí termina el txtNumber.addEventListener


