<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Counter />
  </div>
</template>

<script>
import { Counter } from 'ui'

export default {
  name: 'app',
  components: {
    Counter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
