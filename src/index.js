const express= require ("express");
const app=express();

app.set("port", 4000);
app.listen(app.get("port"));
console.log("Escuchando en el puerto" + app.get("port"));

app.get("/actor", (req,res)=>{
    res.send("mensaje recibido")
})
console.log("Es nuevo")
console.log("Practicando nodemon")
console.log("repasando")