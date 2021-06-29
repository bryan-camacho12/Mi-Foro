const { Router } = require("express");
const router = Router();

const {
    getComentario,
    createComentario,
    getComentariobyId,
} = require("../controllers/comentario.controllers");
//get leer, post insertar, put actualizar, delete eliminar
router.get("/comentarios", getComentario);
router.post("/comentarios", createComentario);
router.get("/comentarios/:id", getComentariobyId);

module.exports = router;