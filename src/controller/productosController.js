import fs from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";

const dirname = path.dirname(fileURLToPath(import.meta.url));

export const obtenerProductos = async (req, res) => {
  let productos = await fs.readFile(
    path.join(dirname, "./productos.json"),
    "utf8"
  );
  let productosJ = JSON.parse(productos);
  console.log(productosJ);
  res.json(productosJ);
};

export const agregarProductos = (req, res) => {
  const nuevoProducto = req.body;
  nuevoProducto.id = Date.now().toString();
  productosEnCarrito.push(nuevoProducto);

  res.json(`el producto ${nuevoProducto} se agrego al carrito`, {
    producto: nuevoProducto,
  });
};

export const eliminarProducto = (req, res) => {
  const { id } = req.body;

  productosEnCarrito = productosEnCarrito.filter(
    (producto) => producto.id != id
  );

  res.json(`el producto ${nuevoProducto} se elimino del carrito carrito`, {
    productId: id,
  });
};
