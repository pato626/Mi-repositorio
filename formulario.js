//Creo una clase constructora para guardar los datos de los nuevos clientes.

class Cliente {
    constructor(nombre, apellido, telefono, correo, edad, fecha) {
        this.nombre = nombre; 
        this.apellido = apellido;
        this.telefono = telefono;
        this.correo = correo;
        this.edad = edad;
        this.fecha = fecha;
    }
}

// Creo un array vacío para guardar los datos de los futuros clientes.

const arrayClientes = []; 

// LLamo al id del formulario

const formulario = document.getElementById("formulario");



// creamos un evento para controlar las acciones del usuario. (llenar el formulario).

formulario.addEventListener("submit", (e) => {

    //Evito el comportamiento por default del formulario (se refresca la página) 

    e.preventDefault();

// Creo las siguientes constantes y las vinculo con los id de mi html.

    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const telefono = document.getElementById("telefono");
    const correo = document.getElementById("correo");
    const edad = document.getElementById("edad");
    const fecha = document.getElementById("fecha");

    //Verificamos por consola que todo este bien por consola.
    console.log("El nombre ingresado es: " + nombre.value);
    console.log("El apellido ingresado es: " + apellido.value);
    console.log("El teléfono ingresado es: " + telefono.value);
    console.log("El correo ingresado es: " + correo.value);
    console.log("La edad ingresada es: " + edad.value);
    console.log("Fecha de nacimiento ingresada: " + fecha.value)
    console.log("Formulario Enviado!");

    //Creamos el objeto Cliente: 
    const cliente = new Cliente(nombre.value, apellido.value, telefono.value, correo.value, edad.value, fecha.value);
    arrayClientes.push(cliente);

    //Verificamos por consola el Array: 
    console.log(arrayClientes);

    //Reseteamos el formulario: (para que no tengamos que borrar manualmente los datos ingresados en los input)
    formulario.reset();

})

const boton = document.querySelector("#mi-boton");

boton.className = "btncolor";