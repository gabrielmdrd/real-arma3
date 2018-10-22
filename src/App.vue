<template>
  <!DOCTYPE html>
  <html>
    <head>
      <title>Hola</title>
    </head>
    <body>
      <div id="app">
        <div class="bg">
          <navBar/>
          <div class="globalContent">
            <router-view></router-view>
          </div>

          <Footer/>
        </div>
      </div>
    </body>
  </html>

</template>

<script>
import navBar from './components/navBar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
      navBar,
      Footer
  }
}
</script>

<style src="./assets/css/global.css">
</style>
