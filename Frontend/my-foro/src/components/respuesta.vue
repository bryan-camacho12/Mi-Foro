<template>
  <div>
    <div
      class="alert alert-primary"
      role="alert"
      v-for="res in ListaPublicacion"
      :key="res.id_comentario"
    >
      <p>{{ res.mensaje_comentario }}</p>
    </div>
    <p>{{ id_publicacion }}</p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "respuesta",
  props: { id_publicacion: null },
  data() {
    return {
      ListaPublicacion: null,
    };
  },
  mounted: function () {
    console.log("Id de la publicacion: " + this.id_publicacion);
    let url = "http://localhost:3000/comentarios/";
    axios.get(url + this.id_publicacion).then((data) => {
      this.ListaPublicacion = data.data;
    });
  },
};
</script>