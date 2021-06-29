const { Pool } = require("pg");
const configdb = require("./config");
const pool = new Pool(configdb);

const getUsuario = async(req, res) => {
    const response = await pool.query("SELECT * FROM usuario");
    res.status(200).json(response.rows);
};

const iniciarSesion = async(req, res) => {
    const { usuario, contrasena } = req.body;
    const response = await pool.query(
        "SELECT * FROM usuario WHERE usuario = $1 and contrasena = $2", [usuario, contrasena]
    );
    if (response.rows.length > 0) {
        res.json({
            message: "Registrado con exito",
            estado: true,
        });
    }
    if (response.rows.length === 0)
        res.json({ message: "Usuario y contraseña invalidos", estado: false });
};

const getUsuarioLogueado = async(req, res) => {
    const { usuario } = req.body;
    console.log("usuario" + usuario);
    const response = await pool.query(
        "SELECT * FROM usuario WHERE usuario = $1", [usuario]
    );
    res.status(200).json(response.rows);
};

const createUsuario = async(req, res) => {
    const { nombre, apellido, usuario, contrasena } = req.body;
    const response = await pool.query(
        "INSERT INTO usuario (nombre, apellido, usuario, contrasena) VALUES ($1,$2,$3,$4)", [nombre, apellido, usuario, contrasena]
    );
    if (response) {
        res.json({
            message: "Guardado con éxito",
            estado: true,
        });
    }
    if (!response) {
        res.json({
            message: "Guardado no realizado",
            estado: false,
        });
    }
};
module.exports = {
    getUsuario,
    createUsuario,
    iniciarSesion,
    getUsuarioLogueado,
};