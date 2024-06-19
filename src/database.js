/*const mysql = require ("promise-mysql");
const dotenv=require("dotenv");/*informacion para consumir el archivo .env*/
/*dotenv.config();/*informacion para consumir el archivo .env*/
/*const conection = mysql.createConection({*/
    /*host: process.env.HOST /*"localhost"*/
    /*database: process.env.DATABASE /*"sakila"*/
    /*user: process.env.USER /*"root"*/
    /*password: process.env.PASSWORD /*"C0m3rc1al.1"*/
/*})*/
/*const getConnection =async()=> await conection;
module.exports={
    getConnection
}/*

/*conexion con credenciales directas sin uso de archivo independiente*/
const mysql = require ("promise-mysql");

const conection = mysql.createConnection({
    host: "localhost",
    database: "sakila",
    user: "root",
    password: "C0m3rc1al.1",
})

const getConnection =async()=> await conection;
module.exports={
    getConnection
}