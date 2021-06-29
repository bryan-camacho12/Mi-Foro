const { Pool } = require("pg");
const configdb = require("./config");
const pool = new Pool(configdb);

const getComentario = async(req, res) => {
    const response = await pool.query("SELECT * FROM comentario");
    res.status(200).json(response.rows);
};
const getComentariobyId = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query(
        "SELECT * FROM comentario where id_publicacion = $1", [id]
    );
    res.json(response.rows);
};

const createComentario = async(req, res) => {
    const { mensaje_comentario, id_publicacion } = req.body;
    const response = await pool.query(
        "INSERT INTO comentario (mensaje_comentario, fecha, id_publicacion) VALUES ($1,$2,$3)", [mensaje_comentario, "now()", id_publicacion]
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
    getComentario,
    createComentario,
    getComentariobyId,
};