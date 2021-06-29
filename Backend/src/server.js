const express = require("express");
var cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());
app.all("/", function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});
app.use(express.urlencoded({ extended: true }));
app.get("/", function(req, res) {
    res.send("Hello World on Express NodeJS!");
});

// Routes
app.use(require("./routes/usuario"));
app.use(require("./routes/publicacion"));
app.use(require("./routes/comentario"));

app.listen(3000);
console.log("Servidor levantado en el puerto ", 3000);