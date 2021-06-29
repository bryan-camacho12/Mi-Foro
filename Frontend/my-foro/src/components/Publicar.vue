<template>
  <div>
    <barra />
    <b-card
      overlay
      img-src="https://picsum.photos/900/250/?image=3"
      img-alt="Card Image"
      text-variant="white"
      title="Bienvenido"
      sub-title="Foro"
      class="mb-2"
    >
    </b-card>
    <h2>Agregar nueva publicacion</h2>
    <form>
      <b-row class="mb-4">
        <div class="col-12">
          <b-col>
            <label class="fixed-left" for="exampleInputEmail1">Tema</label>
          </b-col>
          <b-col>
            <input
              type="text"
              class="form-control"
              id="nombre"
              name="nombre"
              v-model="publicar.titulo"
            />
          </b-col>
        </div>
      </b-row>
      <b-row class="mb-4">
        <div class="col-12">
          <b-col>
            <label for="exampleInputEmail1">Mensaje</label>
          </b-col>
          <b-col>
            <b-form-textarea
              class="form-control"
              type="text"
              id="apellido"
              name="apellido"
              v-model="publicar.mensaje"
            />
          </b-col>
        </div>
      </b-row>
      <button
        type="submit"
        @click="guardarPublicacion()"
        class="btn btn-primary"
      >
        publicar
      </button>
      <b-button
        class="mt-3"
        block
        variant="primary"
        @click="$router.push({ path: '/lista' })"
        >Publicaciones</b-button
      >
    </form>
  </div>
</template>
<script>
import axios from "axios";
import barra from "../components/barra";
export default {
  name: "Publicar",
  components: { barra },

  data() {
    return {
      pass: false,
      error: false,
      user: null,
      msm: "",
      publicado: {
        id_publicacion: "",
      },
      ListaPublicacion: {
        type: Array,
      },
      publicar: {
        titulo: "",
        mensaje: "",
        id_usuario: JSON.parse(localStorage.getItem("user")).id_usuario,
      },
      listadoUsuario: [],
    };
  },
  mounted() {
    axios.get("http://localhost:3000/publicaciones").then((data) => {
      this.ListaPublicacion = data.data;
      console.log(this.ListaPublicacion);
    });
  },
  methods: {
    guardarPublicacion() {
      var url = "http://localhost:3000/publicaciones";
      fetch(url, {
        method: "POST", // or 'PUT'
        body: JSON.stringify(this.publicar), // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => {
          console.log("Success:", response);
          this.$router.push({ path: "/publicacion" });
        });
    },
  },
  created() {
    this.user = JSON.parse(localStorage.getItem("user"));
  },
};
</script>