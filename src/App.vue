<template>
  <Header />
  <router-view/>

  <div id="background"></div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#background {
  background: url("/background.png");
  display: inline-block;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -1000;
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: 70%;
  opacity: 20%;
}

// mobile override
@media only screen and (max-width: 620px) {
  #background {
    //display: none;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: -1000;
    background-repeat: no-repeat;
    background-position-x: right;
    background-position-y: 50%;
    background-size: 80%;
    opacity: 20%;
  }
}
</style>
