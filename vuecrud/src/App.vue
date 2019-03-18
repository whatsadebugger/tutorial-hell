<template>
  <div id="app" class="container">
    <!-- <router-link :to="{ name: 'Create' }" class="nav-link">Add Items</router-link> -->
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link :to="{ name: 'Index' }" class="navbar-item">Devices</router-link>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-light">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}

</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
