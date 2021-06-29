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
        placeholder="usuario"
      ></b-form-input>
      <b-form-input
        type="password"
        v-model="password"
        placeholder="password"
      ></b-form-input>
      <b-button
        class="mt-3"
        block
        variant="primary"
        @click="$router.push({ path: '/publicacion' })"
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
  components: {},
  data() {
    return {
      usuario: "",
      password: "",
      error: false,
      msm: "",
    };
  },
  methods: {
    login() {
      let json = {
        usuario: this.usuario,
        password: this.password,
      };
      axios.post("http://localhost:8080/registros", json).then((data) => {
        if (data.data.status == "ok") {
          localStorage.token = data.data.result.token;
          this.$router.push("/publicacion");
        } else {
          this.error = true;
          this.msm = data.data.result.msm;
        }
      });
    },
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
