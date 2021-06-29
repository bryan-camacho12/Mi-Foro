<template>
  <div class="row justify-content-center">
    <b-card
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 40rem"
      class="mb-2"
    >
      <h2 class="mb-5">Registrarse</h2>
      <form>
        <b-row class="mb-4">
          <b-col>
            <label class="fixed-left" for="exampleInputEmail1">Nombre</label>
          </b-col>
          <b-col cols="8">
            <input
              type="text"
              class="form-control"
              id="nombre"
              name="nombre"
              v-model="usuario.nombre"
            />
          </b-col>
        </b-row>
        <b-row class="mb-4">
          <b-col>
            <label class="fixed-left" for="exampleInputEmail1">Apellido</label>
          </b-col>
          <b-col cols="8">
            <input
              type="text"
              id="apellido"
              name="apellido"
              v-model="usuario.apellido"
            />
          </b-col>
        </b-row>
        <b-row class="mb-4">
          <b-col>
            <label class="fixed-left" for="exampleInputEmail1">Usuario</label>
          </b-col>
          <b-col cols="8">
            <input
              type="text"
              id="usuario"
              name="usuario"
              v-model="usuario.usuario"
            />
          </b-col>
        </b-row>
        <b-row class="mb-4">
          <b-col>
            <label class="fixed-left" for="exampleInputEmail1"
              >Contraseña</label
            >
          </b-col>
          <b-col cols="8">
            <input
              type="text"
              id="contrasena"
              name="contrasena"
              v-model="usuario.contrasena"
            />
          </b-col>
        </b-row>
        <b-button @click="guardarUsuario()">registrar</b-button>
      </form>
    </b-card>
  </div>
</template>
<script>
export default {
  name: "Registrar",
  data() {
    return {
      pass: false,
      error: false,
      msm: "",
      usuario: {
        nombre: "",
        apellido: "",
        usuario: "",
        contrasena: "",
      },
    };
  },
  methods: {
    guardarUsuario() {
      var url = "http://localhost:3000/usuarios";
      fetch(url, {
        method: "POST", // or 'PUT'
        body: JSON.stringify(this.usuario), // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => {
          console.log(response);
          this.$router.push({ path: "/publicacion" });
        });
    },
  },
};
</script>