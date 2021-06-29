<template>
  <div class="row justify-content-center">
    <b-card
      title="Iniciar Sesión"
      :img-src="require('../assets/img/foro.jpg')"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
      v-on:submit.prevent="login"
    >
      <b-form-input
        class="mb-3"
        v-model="usuario"
        placeholder="Usuario"
      ></b-form-input>
      <b-form-input
        type="password"
        v-model="contrasena"
        placeholder="Contraseña"
      ></b-form-input>
      <b-button class="mt-3" block variant="primary" @click="login()"
        >Iniciar Sesión</b-button
      >
      <b-button
        class="mt-3"
        block
        variant="primary"
        @click="$router.push({ path: '/registros' })"
        >Registrarse</b-button
      >
    </b-card>
    <div class="alert alert-danger" role="alert" v-if="error">
      {{ msm }}
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      usuario: "",
      contrasena: "",
      error: false,
      ListaUsuarios: {
        type: Array,
      },
      msm: "",
      user: {
        id_usuario: "",
        nombre: "",
        apellido: "",
      },
    };
  },
  mounted() {
    axios.get("http://localhost:3000/usuarios").then((data) => {
      this.ListaUsuarios = data.data;
      console.log(this.ListaUsuarios);
    });
    localStorage.removeItem("user");
  },
  methods: {
    login() {
      const mail = this.usuario;
      const pass = this.contrasena;
      let filtrar = this.ListaUsuarios.filter(
        (u) => u.usuario.match(mail) && u.contrasena.match(pass)
      );
      if (filtrar.length == 1) {
        this.user.id_usuario = filtrar[0].id_usuario;
        this.user.nombre = filtrar[0].nombre;
        this.user.apellido = filtrar[0].apellido;
        localStorage.setItem("user", JSON.stringify(this.user));
      }
      let json = {
        usuario: this.usuario,
        contrasena: this.contrasena,
      };
      axios.post("http://localhost:3000/login", json).then((data) => {
        console.log(data.estado);
        if (data.data.estado == true) {
          console.log("bienvenido");
          this.$router.push("/publicacion");
        } else {
          this.error = true;
          console.log("error");
        }
      });
    },
  },
};
</script>
