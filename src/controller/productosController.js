import fs from 'fs/promises'
import { fileURLToPath } from 'url'
import path from 'path'

const dirname=path.dirname(fileURLToPath(import.meta.url)) 





export const obtenerProductos=async(req,res)=>{ 
    
    /*fs.readFile('public/js/productos.json','utf8',(error,data)=>{

        if(error){
            console.error('hubo un error en la localizacion de productos',{message:error})
            return
        }

        productos=JSON.parse(data) 
        console.log('productos leidos',productos)
    })*/ 
    console.log(dirname)
  
 let productos= await fs.readFile()  ('./productos.json','utf-8')
 let productosJ=JSON.parse(productos) 
 console.log(productosJ)

} 

export const agregarProductos=(req,res)=>{ 

    const nuevoProducto=req.body 
    nuevoProducto.id= Date.now().toString() 
    productosEnCarrito.push(nuevoProducto) 

    res.json(`el producto ${nuevoProducto} se agrego al carrito`, {producto:nuevoProducto})

} 

export const eliminarProducto=(req,res)=>{ 

    const {id}=req.body 

    productosEnCarrito=productosEnCarrito.filter(producto=>producto.id!=id) 

    res.json(`el producto ${nuevoProducto} se elimino del carrito carrito`, {productId:id})

} 