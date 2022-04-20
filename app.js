const express = require("express");
const app = express();
app.use(express.static("public"));

app.listen(3000, () => {
    console.log("Servidor Funcionando");
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/login.html");
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/productCart.html");
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/productDetail.html");
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/register.html");
});