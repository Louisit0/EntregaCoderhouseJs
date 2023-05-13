//Pre-entrega

let opciones = 0;

const validarPrograma = () => {
  opciones = Number(
    prompt("Ingrese 1 para continuar sino finaliza el programa.")
  );
  if (opciones === 1 && !isNaN(opciones)) {
    obtenerCantidadProducto();
  } else {
    console.log("Programa finalizado.");
  }
};

const obtenerCantidadProducto = () => {
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
};

const obtenerPrecioProducto = (cant) => {
  let precio = Number(prompt("Ingrese el precio del producto"));
  calcularPrecioTotal(cant, precio);
};

const calcularPrecioTotal = (cant, precio) => {
  let total = cant * precio;
  console.log(`El valor total de su compra fue de: ${total}`);
};

validarPrograma();
