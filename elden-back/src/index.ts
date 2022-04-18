import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get('/', (req, res)=>{
    res.send('Hola express');
});

app.listen(8000, ()=>{
    console.log(`Elden esta corriendo en puerto ${8000}`);  
})