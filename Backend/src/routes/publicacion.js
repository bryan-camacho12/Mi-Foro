const { Router } = require("express");
const router = Router();

const {
    getPublicacion,
    createPublicacion,
} = require("../controllers/publicacion.controllers");
//get leer, post insertar, put actualizar, delete eliminar
router.get("/publicaciones", getPublicacion);

router.post("/publicaciones", createPublicacion);

module.exports = router;