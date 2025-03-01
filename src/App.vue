<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header>
    <div class="container wrapper">
      <nav>
        <a class="navbar-brand" href="#">
          <img
            alt="Vue logo"
            class="logo"
            src="@/assets/logo.svg"
            width="25"
            height="25"
          />
        </a>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/nijwel">Nijwel</RouterLink>
        <RouterLink to="/alquran">Al-Quran</RouterLink>
      </nav>
    </div>
  </header>

  <div class="container wrapper">
    <RouterView />
  </div>
</template>

<style scoped>
.wrapper {
  padding: 10px;
  background-color: #f8f9fa;
}

nav {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

nav a {
  text-decoration: none;
  color: #007bff;
}

nav a:hover {
  text-decoration: underline;
}
</style>
