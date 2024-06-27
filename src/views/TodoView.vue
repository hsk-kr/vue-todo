<script setup lang="ts">
import TodoList from '@/components/TodoList.vue'
import TodoViewHeader from '@/components/TodoViewHeader.vue'
import TodoFormModal from '@/components/TodoFormModal.vue'
import type { Todo } from '@/typings/todo'
import { ref } from 'vue'
import { getTodos } from '@/lib/api/todo'

const todos = ref<Todo[]>([
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

const todoFormModal = ref<{
  id?: number
  visible: boolean
}>({
  id: undefined,
  visible: false
})

const closeTodoFormModal = () => {
  todoFormModal.value.visible = false
}

const openAddTodoFormModal = () => {
  todoFormModal.value.id = undefined
  todoFormModal.value.visible = true
}

// const newTodos = await getTodos();
// todos = newTodos;
</script>

<template>
  <TodoFormModal :open="todoFormModal.visible" @close="closeTodoFormModal" />
  <TodoViewHeader @add-todo="openAddTodoFormModal" />
  <div class="todo-container">
    <TodoList :todos="todos" />
  </div>
</template>

<style scoped>
.todo-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: auto;
  max-width: 1024px;
  gap: 24px;
  padding: 24px;
}

@media only screen and (max-width: 768px) {
  .todo-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media only screen and (max-width: 480px) {
  .todo-container {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
