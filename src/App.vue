<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
  <div class="container-fluid">
    <a class="navbar-brand fs-4" href="#">CAR WASH PRO</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ">
        <RouterLink class="nav-link active fs-4" aria-current="page" to="/">Home</RouterLink>
        <RouterLink class="nav-link fs-4" to="/service">Service</RouterLink>
        <RouterLink class="nav-link fs-4" to="/contact">Contact</RouterLink>
      </div>
    </div>
  </div>
</nav>
<div>
  <RouterView></RouterView>
</div>
</template>

<script>

export default {
  name: 'App',
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
.navbar-nav {
margin-left: 25rem;
}
.navbar-nav .nav-link{
  margin-left: 8rem;
}
</style>
