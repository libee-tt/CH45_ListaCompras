
const btnAgregar = document.getElementById("btnAgregar");
const txtNombre = document.getElementById("Name");
const txtNumber = document.getElementById("Number");
const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
const tablaListaCompras = document.getElementById("tablaListaCompras");
const cuerpoTabla = tablaListaCompras.getElementsByTagName("tbody").item(0);
const contadorProductos = document.getElementById("contadorProductos");
let productosTotal = document.getElementById("productosTotal");
let precioTotal = document.getElementById("precioTotal");
// bandera, al ser true permite agregar datos a la tabla
let isValid = true;
let contador = 0;
let precio =0;
let costoTotal = 0;
let totalEnProductos=0;


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
} //cierra función validarCantidad

function getPrecio(){
    return Math.round((Math.random()*10000))/100;
} // cierra getPrecio




// Validar la información de los campos
btnAgregar.addEventListener("click", function (event){
    event.preventDefault();
        txtNombre.style.border="";
        txtNumber.style.border="";
        alertValidacionesTexto.innerHTML="";
        alertValidaciones.style.display="none";
        isValid = true;
// Validación del nombre del producto  
    if (txtNombre.value.length<3) {
        txtNombre.style.border="solid red medium";
        alertValidacionesTexto.innerHTML="El <strong> Nombre </strong> no es correcto. <br>"
        alertValidaciones.style.display="block"
        isValid = false;
    } //cierre validación del nombre
// Validación de la cantidad
    if (! validarCantidad()){
        txtNumber.style.border="solid red medium";
        alertValidacionesTexto.innerHTML+="La <strong>cantidad</strong> no es correcta. <br>"
        alertValidaciones.style.display="block"
        isValid = false;
    } //cierre validarCantidad

    if (isValid){
        contador ++;
        precio = getPrecio();
        let row =`<tr>
                    <td>${contador}</td>
                    <td>${txtNombre.value}</td>
                    <td>${txtNumber.value}</td>
                    <td>${precio}</td>
        </tr>` ;
        cuerpoTabla.insertAdjacentHTML("beforeend", row);
        costoTotal += precio * Number(txtNumber.value);
        totalEnProductos += Number(txtNumber.value);
        contadorProductos.innerText = contador;
        productosTotal.innerText=totalEnProductos;
        precioTotal.innerText= "$" + costoTotal.toFixed(2);
        localStorage.setItem("contador", contador);
        localStorage.setItem("totalEnProductos", totalEnProductos);
        localStorage.setItem("costoTotal", costoTotal);



        // para limpiar después de agregar
        txtNombre.value="";
        txtNumber.value="";
        txtNombre.focus();
        
    }//cierre de isValid
    
}); //Aquí termina el btnAgregar.addEventListener

// Evento blur es cuando un campo pierde el foco
txtNombre.addEventListener("blur", function(event){
    txtNombre.value = txtNombre.value.trim();

}); //Aquí termina el txtNombre.addEventListener

txtNumber.addEventListener("blur", function(event){
    txtNumber.value = txtNumber.value.trim();

}); //Aquí termina el txtNumber.addEventListener

window.addEventListener("load", function(){
    if (this.localStorage.getItem("contador")!=null){
        contador=Number(this.localStorage.getItem("contador"));
    } // cierre de null 

    if (this.localStorage.getItem("totalEnProductos")!=null){
        totalEnProductos = Number(localStorage.getItem("totalEnProductos"));
    } //cierre de null

    if (this.localStorage.getItem("costoTotal")!=null){
        costoTotal=Number(localStorage.getItem("costoTotal"));
    } //cierre de null
    contadorProductos.innerText = contador;
    productosTotal.innerText=totalEnProductos;
    precioTotal.innerText="$"+costoTotal.toFixed(2);
});