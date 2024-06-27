<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import KoreanStreetImg from '@/assets/korean_street.png'
</script>
<template>
  <main>
    <img :src="KoreanStreetImg" />
    <div>
      <h1>Welcome</h1>
      <p>My first Vue project</p>
    </div>
  </main>
</template>

<style scoped>
main {
  position: relative;
  overflow: hidden;
  height: calc(100svh - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}

main > div {
  max-width: 80svw;
  border: 4px solid var(--primary);
  padding: 24px 48px;
  margin-top: 10%;
  z-index: 1;
}

main > img {
  position: absolute;
  opacity: 0.2;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

h1 {
  font-size: 4em;
  font-weight: bold;
}

p {
  font-size: 2em;
  font-weight: bold;
}

h1,
p {
  animation: flicker 1.5s infinite alternate;
  color: white;
  text-shadow:
    0 0 4px #fff,
    0 0 11px #fff,
    0 0 19px #fff,
    0 0 40px var(--primary),
    0 0 80px var(--primary),
    0 0 90px var(--primary),
    0 0 100px var(--primary),
    0 0 150px var(--primary);
}

@media only screen and (max-width: 480px) {
  * {
    font-size: 80%;
  }
}

@keyframes flicker {
  20%,
  24%,
  55% {
    text-shadow: none;
    color: var(--secondary);
  }
}
</style>
