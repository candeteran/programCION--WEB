// Funciones para el carrito

function abrirModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
}

function cerrarModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

function abrirModalero() {
    var modal = document.getElementById("modalero");
    modal.style.display = "block";
}

function cerrarModalero() {
    var modal = document.getElementById("modalero");
    modal.style.display = "none";
}

var carrito = pickearCarritoGuardado();
actualizarCarrito()
var agregarCarritoButtons = document.getElementsByClassName('agregar-carrito');
for (var i = 0; i < agregarCarritoButtons.length; i++) {
    agregarCarritoButtons[i].addEventListener('click', agregarProductoAlCarrito);
}

var botonVaciar = document.getElementById('boton-vaciar');
botonVaciar.addEventListener('click', vaciarCarrito);


function agregarProductoAlCarrito(evento) {
    var button = evento.target;
    var producto = button.parentElement.parentElement;
    var titulo = producto.getElementsByClassName('card-title')[0].innerText;
    var precio = producto.getElementsByClassName('card-text')[0].innerText;
    var precio = precio.substring(1) 
    var productoAgregado = {
        titulo: titulo,
        precio: precio,
    };
    carrito.push(productoAgregado);
    actualizarCarrito();
    guardarCarritoEnLocalStorage();
    
}

function actualizarCarrito() {
    var carritoContainer = document.getElementById('carrito');
    carritoContainer.innerHTML = '';
    for (var i = 0; i < carrito.length; i++) {
        var producto = carrito[i];
        var carritoElemento = document.createElement('li');
        carritoElemento.classList.add('list-group-item');
        var contenido = `
            <span>${producto.titulo}</span>
            <span>$${producto.precio}</span>
        `;
        carritoElemento.innerHTML = contenido;
        carritoContainer.appendChild(carritoElemento);
    }
    calcularTotal();
}

function calcularTotal() {
    var total = 0;
    for (var i = 0; i < carrito.length; i++) {
        total += parseInt(carrito[i].precio);
    }
    var totalElemento = document.getElementById('total');
    totalElemento.innerText = total;
}

function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
    guardarCarritoEnLocalStorage()
}

function pickearCarritoGuardado() {
    var carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        return JSON.parse(carritoGuardado); 
    } else {
        return [];
    }
    
}

function guardarCarritoEnLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function finalizarCompra () {
    var totalElemento = document.getElementById('total')
    var tot = totalElemento.innerText;
    if(carrito.length === 0 ) {
        alert("No ha seleccionado nada para comprar")
    }else {
        alert("Precio final $" + tot )
        alert("¡GRACIAS POR SU COMPRA!")
        vaciarCarrito()

    }
}

//contacto

function checkout(){
    alert('Seguro que desea guardar sus datos?')
}






































/* funciones para el carrito de precio y combos

// Variables globales para el carrito y el total
var carrito = [];
var total = 0;
*/

// Función para actualizar el carrito en el HTML
/*function actualizarCarrito() {
    var carritoElement = document.querySelector('.Colorcarro');
    carritoElement.innerHTML = '';

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

// Función para agregar un producto al carrito
function comprarProducto1() {
    var producto = {
        id: 1,
        nombre: 'Shampoo Sólido',
        precio: 1800,
        cantidad: 1
    };
    agregarAlCarrito(producto);
}

function comprarProducto2() {
    var producto = {
        id: 2,
        nombre: 'Acondicionador Sólido',
        precio: 2000,
        cantidad: 1
    };
    agregarAlCarrito(producto);
}

function comprarProducto3() {
    var producto = {
        id: 3,
        nombre: 'Combo',
        precio: 3200,
        cantidad: 1
    };
    agregarAlCarrito(producto);
}

function comprarProducto4() {
    var producto = {
        id: 4,
        nombre: 'Tabla de Madera',
        precio: 2500,
        cantidad: 1
    };
    agregarAlCarrito(producto);
}



// Función para vaciar el carrito
function vaciar() {
    carrito = [];
    total = 0;
    actualizarCarrito();
}

// Función para finalizar la compra
function finalizarCompra() {
    // Aquí puedes agregar la lógica para finalizar la compra, como enviar una solicitud de compra o realizar otras acciones.
    // Puedes utilizar los datos en "carrito" para completar la compra.

    vaciar();
}
*/

