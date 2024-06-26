<script setup lang="ts">
import type { Todo as TodoType } from '@/typings/todo'
import Todo from '@/components/Todo.vue'

const props = defineProps<{
  todos: TodoType[]
}>()
</script>
<template>
  <Todo
    v-for="todo in props.todos"
    :key="todo.id"
    :title="todo.title"
    :desc="todo.desc"
    :done="todo.done"
  />
</template>
