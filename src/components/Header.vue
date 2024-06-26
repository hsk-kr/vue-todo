<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <span>Vue Todo</span>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/todo">Todo</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  padding: 8px 24px;
  height: 60px;
  box-sizing: border-box;
  background-color: var(--primary);
  color: white;
  display: flex;
  align-items: center;

  span {
    font-size: 1.2em;
    font-weight: bold;
    margin-right: 24px;
  }
}

nav {
  display: flex;
  gap: 8px;
}

nav > a {
  color: white;

  &:hover {
    transition: all 0.5s;
    opacity: 0.8;
  }
}

nav > a:hover {
  transition: all 0.5s;
  opacity: 0.8;
}

a.router-link-active {
  font-weight: bold;
}
</style>
