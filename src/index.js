const express= require ("express");
const app=express();
const database = require("./database");
app.set("port", 4000);


app.get("/actor", async(req, res)=>{
    const conection = await database.getConnection()
    const resultado = await conection.query("SELECT * from actor");
    res.json(resultado);
    /*res.send("mensaje recibido")*/

})
app.listen(app.get("port"));
console.log("Escuchando en el puerto" + app.get("port"));
console.log("Es nuevo");
console.log("Practicando nodemon");
console.log("repasando");