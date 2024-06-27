<script setup lang="ts">
const emit = defineEmits<{
  (e: 'add-todo'): void
}>()
</script>

<template>
  <div class="tools">
    <button class="add-btn" @click="emit('add-todo')">Add Todo</button>
  </div>
</template>
<style scoped>
.tools {
  padding: 16px 24px;
}

.add-btn {
  background-color: var(--primary);
  color: white;
  padding: 8px 16px;
  font-size: 1em;
  border-radius: 4px;
  cursor: pointer;
}

.add-btn:hover {
  opacity: var(--hover-opacity);
}
</style>
