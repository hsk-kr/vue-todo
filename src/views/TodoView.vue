<script setup lang="ts">
import TodoList from '@/components/TodoList.vue'
import type { Todo } from '@/typings/todo'
import { reactive } from 'vue'
const todos = reactive<Todo[]>([
  {
    id: 'a',
    title: 'title',
    desc: 'desc',
    done: true
  },
  {
    id: 'b',
    title: 'title',
    desc: 'desc',
    done: true
  }
])
</script>

<template>
  <div>Todo View</div>
  <div>
    <TodoList :todos="todos" />
  </div>
</template>

<style scoped></style>
