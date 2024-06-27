<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { Todo } from '@/typings/todo'

const props = defineProps<Omit<Todo, 'id'>>()
</script>
<template>
  <div class="todo">
    <div class="hover-content">
      <i class="edit-btn pi pi-pen-to-square"></i>
      <i class="delete-btn pi pi-trash"></i>
    </div>
    <div>
      <h2>{{ props.title }}</h2>
      <p>{{ props.desc }}</p>
    </div>
    <i :class="['done pi pi-check', { active: done }]"></i>
  </div>
</template>

<style scoped>
.todo {
  position: relative;
  height: 120px;
  padding: 16px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
}

.todo p {
  font-size: 0.9em;
  padding: 4px 2px;
}

.hover-content {
  position: absolute;
  right: 8px;
  top: 6px;
  display: none;
  gap: 8px;
  font-size: 1.2em;
}

.todo:hover .hover-content {
  display: flex;
}

.hover-content > i {
  cursor: pointer;
  transition: all 0.5s;
}

.hover-content > i:hover {
  scale: 1.1;
  opacity: var(--hover-opacity);
}

.edit-btn {
  color: var(--warning);
}

.delete-btn {
  color: var(--danger);
}

.done {
  border-radius: 4px;
  align-self: stretch;
  justify-self: end;
  text-align: center;
  padding: 8px 16px;
  background-color: #ececec;
  color: black;
  cursor: pointer;
}

.done:hover {
  opacity: var(--hover-opacity);
  transition:
    all 0,
    5s;
  cursor: pointer;
}

.done.active {
  background-color: var(--primary);
  color: white;
}
</style>
