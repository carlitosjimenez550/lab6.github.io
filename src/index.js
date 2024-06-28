const express= require ("express");
const app=express();
const database = require("./database");
app.set("port", 4000);


app.get("/actor", async(req, res)=>{
    const conexion = await database.getConnection()
    const resultado = await conexion.query("SELECT * from sakila.actor");
    res.json(resultado);
    /*res.send("mensaje recibido")*/
})
app.listen(app.get("port"));
/*console.log("Escuchando en el puerto" + app.get("port"));
console.log("Es nuevo");
console.log("Practicando nodemon");
console.log("repasando");*/
console.log("Servidor escuchando en http://localhost:4000/actor");