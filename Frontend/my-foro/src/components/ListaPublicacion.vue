<template>
  <div>
    <h1>Publicaciones</h1>
    <b-col v-for="(publicacion, index) in listadoPublicaciones" :key="index">
      <b-card>
        <b-card-title> {{ publicacion.titulo }}</b-card-title>
        <b-card-sub-title> {{ publicacion.fecha }}</b-card-sub-title>
        <b-card-text class="pt-4">
          {{ publicacion.mensaje }}
        </b-card-text>
        <respuesta :id_publicacion="publicacion.id_publicacion" />
        <b-card-text>{{
          publicacion.nombre + "" + publicacion.apellido
        }}</b-card-text>

        <b-card-body> </b-card-body>
        <div>
          <b-input-group>
            <b-form-textarea v-model="comentario.mensaje_comentario">
            </b-form-textarea>
            <b-button
              variant="outline-success"
              @click="guardarComentario(publicacion.id_publicacion)"
            >
              Comentar
            </b-button>
          </b-input-group>
        </div>
      </b-card>
    </b-col>
  </div>
</template>

<script>
var dateFormat = require("dateformat");
import respuesta from "../components/respuesta";
export default {
  name: "ListarPublicacion",
  components: { respuesta },
  data() {
    return {
      pass: false,
      error: false,
      msm: "",
      user: null,
      publicar: null,
      comentario: {
        mensaje_comentario: "",
        id_publicacion: "",
      },
      listadoPublicaciones: [],
      listadoComentarios: [],
    };
  },
  methods: {
    guardarPublicacion() {
      var url = "http://localhost:3000/publicaciones";

      fetch(url, {
        method: "GET", // or 'PUT'
      })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => {
          console.log("Success:", response);
          response.forEach((element) => {
            element.fecha = dateFormat(element.fecha, "yyyy-mm-dd");
          });
          this.listadoPublicaciones = response;
        });
    },
    getComentario() {
      var url = "http://localhost:3000/comentarios";
      fetch(url, {
        method: "GET", // or 'PUT'
      })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => {
          console.log("Success:", response);
          response.forEach((element) => {
            element.fecha = dateFormat(element.fecha, "yyyy-mm-dd");
          });
          this.listadoComentarios = response;
        });
    },
    guardarComentario(id) {
      var url = "http://localhost:3000/comentarios";
      console.log("Prueba");
      this.comentario.id_publicacion = id;
      fetch(url, {
        method: "POST", // or 'PUT'
        body: JSON.stringify(this.comentario), // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => {
          console.log("Success", response);
        });
    },
  },

  created() {
    this.getComentario();
    this.guardarPublicacion();
    this.guardarComentario();
    this.user = JSON.parse(localStorage.getItem("user"));
    this.publicar = JSON.parse(localStorage.getItem("publicar"));
    console.log("hola");
    console.log(JSON.parse(localStorage.getItem("publicar")));
  },
};
</script>