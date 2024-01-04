
import express from 'express' 
import {obtenerProductos ,agregarProductos,eliminarProducto } from '../controller/productosController.js' 

const router=express.Router()  



router.get('/',obtenerProductos) 

router.post('/',agregarProductos) 

router.delete('/:id',eliminarProducto) 

export default router
