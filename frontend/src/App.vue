<template>
  <div class="conteiner">
    <Navbar />
    <main>
      <RouterView />
    </main>
  </div>
</template>
<script>
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
export default {
  components: {
    Navbar,
    RouterView
  },
  mounted() {
    if(localStorage.getItem('token')){
      this.$store.dispatch('getUser')
        .then((res) => console.log('Success get user'))
    }  
  }
}
</script>
<style scoped>
main {
  width: 80%;
  margin: 0 auto;
}
</style>