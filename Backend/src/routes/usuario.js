const { Router } = require("express");
const router = Router();

const {
    getUsuario,
    createUsuario,
    iniciarSesion,
    getUsuarioLogueado,
} = require("../controllers/usuario.controllers");
//get leer, post insertar, put actualizar, delete eliminar
router.get("/usuarios", getUsuario);
router.post("/usuarios", createUsuario);
router.post("/login", iniciarSesion);
router.get("/logueado/:usuario", getUsuarioLogueado);

module.exports = router;