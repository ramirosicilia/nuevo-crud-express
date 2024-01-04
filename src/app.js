import express from 'express' 
import cors from 'cors'
import productosRouter from './router/productosRouter.js' 
import { fileURLToPath } from 'url'
import path from 'path'




const app=express() 
const Puerto=5000

app.use(cors()) 
app.use(express.json())

app.use(express.urlencoded({extended:false})) 
const dirname=path.dirname(fileURLToPath(import.meta.url)) 
console.log(dirname)

app.use('/public',express.static(path.join(dirname ,'../public'))) 


app.get('/api/productos',(req,res)=>{
    res.sendFile(path.join(dirname,'../public/index.html'))
    
})  




app.use('/api/productos1',productosRouter) 

app.listen(Puerto,()=>{
    console.log(`el servidor se esta escuchando en el puerto:${Puerto}`)
})


