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
/*const mysql = require('mysql2');
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
}*/

const mysql = require('mysql');
const {Conecction} = require ("promise-mysql");

const conexiondb = mysql.createConnection({
    host: "localhost",
    database: "sakila",
    user: "root",
    password: "C0m3rc1al.1",
});

const getConnection =async()=> await conexiondb;
module.exports={
    getConnection
};
/*conexion.connect(function(err){
    if(err){
        throw err;
    } else {
        console.log("conexion exitosa");
        console.log("Servidor escuchando en http://localhost:4000");
    }
});*/

/* link tutorial 
https://community.listopro.com/como-conectar-una-base-de-datos-con-javascript/*/