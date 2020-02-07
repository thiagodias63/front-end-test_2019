<template>
  <div id="app">
    <Header/>
    <ListCountry/>
    <Menu/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Menu from './components/Menu.vue'
import ListCountry from './components/ListCountry.vue'

export default {
  name: 'app',
  components: {
    Menu,
    Header,
    ListCountry
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  border: 0;
}
#app {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  text-align: center;
  background-color: #13131F; 
  color: #F9F9F9;
}
</style>
