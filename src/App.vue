<template>
  <div id="app">
   		<router-view></router-view>
   				<router-link to="/first"></router-link>
   		
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hello Vue'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  max-width: 750px;
}
</style>
