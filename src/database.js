const mysql = require ("promise-mysql");
const dotenv=require("dotenv");/*informacion para consumir el archivo .env*/
dotenv.config();/*informacion para consumir el archivo .env*/
const conection = mysql.createcConection({
    host: process.env.HOST /*"localhost"*/,
    database: "sakila",
    user: "root",
    password:"C0m3rc1al.1",
})
const getConnection =async()=> await conection;
module.exports={
    getConnection
}