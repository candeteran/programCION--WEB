/* funcion para el botón del inicio*/
function saludar() {
    alert("¡¡Cada tanto hay 2x1 en toda la web!! No te pierdas todas las novedades y suscribite a nuestro newsletter");
}

/* funciones para el carrito de precio y combos*/

var carrito = [];
var total = 0;

function actualizarCarrito() {
    // Actualiza el HTML del carrito
    var carritoElement = document.querySelector('.container-cart-products');
    var noProductosElement = document.querySelector('#no-productos');
    var cartTotalElement = document.querySelector('#cart-total');
    var cantidadElement = document.querySelector('#cantidad');
    var comprarBtn = document.querySelector('#comprarBtn');

    if (carrito.length === 0) {
        var noProductosElement = document.querySelector('#no-productos');
        noProductosElement.style.display = 'block';
    } else {
        var noProductosElement = document.querySelector('#no-productos');
        noProductosElement.style.display = 'none';

        var cartTotalElement = document.querySelector('#cart-total');
        cartTotalElement.textContent = total;

        var cantidadElement = document.querySelector('#cantidad');
        cantidadElement.textContent = carrito.length;

        carrito.forEach(function (producto) {
            var row = document.createElement('div');
            row.classList.add('row-product');
            row.innerHTML = `
                <p>${producto.nombre}</p>
                <p>Cantidad: ${producto.cantidad}</p>
                <p>Precio: $${producto.precio * producto.cantidad}</p>
            `;
            carritoElement.appendChild(row);
        });
    }
}


function comprar(productoId) {
        var productos = {
            1: { nombre: 'Shampoo Sólido', precio: 1800 },
            2: { nombre: 'Acondicionador Sólido', precio: 2000 },
            3: { nombre: 'Combo', precio: 3200 },
            4: { nombre: 'Tabla de Madera', precio: 2500 }
        };
    
        if (productos[productoId]) {
            var producto = productos[productoId];
            var productoExistente = carrito.find(item => item.id === productoId);
    
            if (productoExistente) {
                productoExistente.cantidad++;
            } else {
                carrito.push({
                    id: productoId,
                    nombre: producto.nombre,
                    precio: producto.precio,
                    cantidad: 1
                });
            }
    
            total += producto.precio;
        }
    }

//vaciar carrito:

function vaciar() {
    carrito = [];
    total = 0;
    actualizarCarrito();
}

function finalizarCompra() {
  // Obtén las referencias a los elementos HTML que necesitas
var nombreInput = document.getElementById("nombre");
var apellidoInput = document.getElementById("apellido");
var termsCheckbox = document.getElementById("termsCheckbox");

  // Verifica si se han completado los campos requeridos
if (!nombreInput.value || !apellidoInput.value) {
    alert("Por favor, completa todos los campos requeridos.");
    return;
}

  // Verifica si se ha aceptado los términos y condiciones
if (!termsCheckbox.checked) {
    alert("Debes aceptar los términos y condiciones para continuar.");
    return;
}


    vaciar();
}


// Vincula el botón "Vaciar carrito" a la función vaciar
var vaciarBtn = document.querySelector('button.btn.btn-danger');
vaciarBtn.addEventListener('click', vaciar);

// Vincula el botón "Finalizar Compra" a la función finalizarCompra
var finalizarBtn = document.querySelector('#finalizarBtn');
finalizarBtn.addEventListener('click', finalizarCompra);

