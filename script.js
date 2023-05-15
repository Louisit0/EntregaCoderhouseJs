let productos = [
  {
    nombre: "Helado de chocolate",
    descripcion: "Delicioso helado de chocolate",
    precio: 3.99,
  },
  {
    nombre: "Helado de vainilla",
    descripcion: "Suave helado de vainilla",
    precio: 3.49,
  },
  {
    nombre: "Cucurucho",
    descripcion: "Cucurucho común con chips de chocolate",
    precio: 2.51,
  },
  {
    nombre: "Vasito",
    descripcion: "Nuestro helado más pequeño",
    precio: 2.01,
  },
];

let carrito = [];

function agregarAlCarrito(index) {
  carrito.push(productos[index]);
}

function buscarHelado(nombre) {
  return productos.find(function (helado) {
    return helado.nombre.toLowerCase() === nombre.toLowerCase();
  });
}

function filtrarHelados(precio) {
  return productos.filter(function (helado) {
    return helado.precio < precio;
  });
}

let menuProductos = "";

productos.forEach(function (producto) {
  menuProductos += producto.nombre + "\n";
});

alert("Menú de productos:\n" + menuProductos);

function validarPrograma() {
  let opciones = Number(
    prompt(
      "Ingrese 1 para continuar o cualquier otro número para finalizar el programa."
    )
  );

  if (opciones === 1 && !isNaN(opciones)) {
    obtenerCantidadProducto();
  } else {
    console.log("Programa finalizado.");
  }
}

function obtenerCantidadProducto() {
  let cantidad = 0;
  while (true) {
    cantidad = Number(prompt("Ingrese la cantidad de productos"));
    if (!isNaN(cantidad)) {
      obtenerPrecioProducto(cantidad);
      break;
    } else {
      console.log("Por favor ingrese un número válido.");
    }
  }
}

function obtenerPrecioProducto(cantidad) {
  let nombre = prompt("Ingrese el nombre del producto que desea comprar");
  let helado = buscarHelado(nombre);

  if (helado) {
    let precio = helado.precio;
    calcularPrecioTotal(cantidad, precio);
    agregarAlCarrito(productos.indexOf(helado));
    filtrarHelados(3); // Ejemplo de uso de la función filtrarHelados
  } else {
    console.log("No se encontró el helado en la lista de productos.");
  }
}

function calcularPrecioTotal(cantidad, precio) {
  let total = cantidad * precio;
  console.log(`El valor total de su compra fue de: ${total}`);
}

validarPrograma();
