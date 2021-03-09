<template>
  <div id="intro">
    <slot name="welcome"></slot>
    <p>Bienvenue !</p>
    <p>PROMOTION SUR LA 4 FROMAGE</p>
    <p>NOUVEAUTE - PIZZA ROYALE</p>
    <p>JEU CONCOURS</p>
    <Likes />
  </div>
  <div id="product-menu">
    <Products />
  </div>
</template>

<script scoped>
import Likes from '../components/Likes.vue';
export default {
  components: { Likes },
  name: "Home",
  data() {
    return {};
  },

  methods: {},

  computed: {}
};
</script>

<style>
#intro {
  background-image: url(../assets/images/pizza-menu.jpg);
  background-position: bottom;
  background-size: cover;
  height: 300px;
  padding: 3%;
  width: 100%;
}
#intro p {
  color: white;
  font-size: 2em;
  font-weight: bold;
  text-shadow: black 0.1em 0.1em 0.2em;
}
#product-menu {
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
}
section {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>