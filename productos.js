

// Declaro un carrito (array vacío)

const carrito = [];

// Declaro los productos que tengo en mi página.

const productos = [
  {
    id: "power-protein",
    titulo: "Power Protein",
    descripcion: "El Power Whey Protein es perfecto para deportistas...",
    precio: 3800,
  },
  {
    id: "sportland",
    titulo: "Sportland",
    descripcion: "La proteína hidrolizada es la proteína más indicada...",
    precio: 7200,
  },
  {
    id: "lupine-protein",
    titulo: "Lupine Protein",
    descripcion: "Lupine Protein es un suplemento alimenticio premium...",
    precio: 4500,
  },
  {
    id: "bpi-protein",
    titulo: "BPI Protein",
    descripcion: "Es una proteína aislada de suero 100%...",
    precio: 8000,
  },
];



// Llamo a los botones con getElementByTagName y transformo en un array al html collection
// con el método Array.from, para poder utilizar el método for each.


const botones = Array.from(document.getElementsByTagName("button"));

// index me da la posición del elemento en el array.

botones.forEach((boton, index) => {
    boton.className = "btncolor";
    boton.innerText = "Añadir al carrito";


    // Agrego un event click a cada botón "Comprar"

    boton.addEventListener("click", () => {

        // Obtengo el producto específico donde realizan el click los usuarios y lo guardo en una constante.

        const productoSeleccionado = productos[index];
        carrito.push(productoSeleccionado);
        // Muestro un mensaje de confirmación con SweetAlert, del producto seleccionado.

        Swal.fire({
            title: 'Producto agregado al carrito.',
            text: `${productoSeleccionado.titulo} se ha añadido al carrito`,
            icon: 'success',
            confirmButtonText: 'OK'
        });
    });
});

// Vinculo con getElementById a la tabla de mi carrito

const carritoBody = document.getElementById("carrito-body");

// Recorro los productos en el carrito y los agrego a la tabla.

carrito.forEach((producto) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
        <td>${producto.titulo}</td>
        <td>${producto.descripcion}</td>
        <td>$${producto.precio.toFixed(2)}</td>
    `;
    carritoBody.appendChild(fila);
});



