<template>
  <div id="app">
    from core: {{ count }}<br />
    from ui: <Counter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Counter } from 'ui';

export default Vue.extend({
  name: 'app',
  computed: {
    count() {
      return this.$store.state.counter.count
    }
  },
  components: {
    Counter 
  }
});
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
