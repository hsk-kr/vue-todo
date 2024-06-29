<script setup lang="ts">
import type { Todo as TodoType } from '@/typings/todo'
import Todo from '@/components/Todo.vue'

const props = defineProps<{
  todos: TodoType[]
}>()
const emit = defineEmits<{
  (e: 'done', todoId: string): void
  (e: 'edit', todoId: string): void
  (e: 'delete', todoId: string): void
}>()
</script>
<template>
  <Todo
    v-for="todo in props.todos"
    :key="todo.id"
    :title="todo.title"
    :desc="todo.desc"
    :done="todo.done"
    @done="emit('done', todo.id)"
    @edit="emit('edit', todo.id)"
    @delete="emit('delete', todo.id)"
  />
</template>
