<script setup lang="ts">


</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Ma Navbar</a>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link active" to="/home">Accueil</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/products">Products</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">À propos</a>
          </li>
          <li class="nav-item dropdown">
            <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
              Plus
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action 1</a></li>
              <li><a class="dropdown-item" href="#">Action 2</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Autre action</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view></router-view>
</template>

<style scoped>
</style>
