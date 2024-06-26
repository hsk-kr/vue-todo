<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { Todo } from '@/typings/todo'

const props = defineProps<Omit<Todo, 'id'>>()
</script>
<template>
  <div>
    <h2>{{ props.title }}</h2>
    <p>{{ props.desc }}</p>
    <button :class="{ active: done }">Done</button>
  </div>
</template>

<style scoped>
div {
  height: 120px;
  padding: 16px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

button {
  padding: 8px 16px;
}

button.active {
  background-color: var(--primary);
  color: white;
}
</style>
