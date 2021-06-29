const { Pool } = require("pg");
const configdb = require("./config");
const pool = new Pool(configdb);

const getPublicacion = async(req, res) => {
    const response = await pool.query("SELECT * FROM vistaPublicacion");
    res.status(200).json(response.rows);
};

const createPublicacion = async(req, res) => {
    const { titulo, mensaje, id_usuario } = req.body;
    const response = await pool.query(
        "INSERT INTO publicacion (titulo, mensaje, fecha, id_usuario) VALUES ($1,$2,$3,$4)", [titulo, mensaje, "now()", id_usuario]
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
    getPublicacion,
    createPublicacion,
};