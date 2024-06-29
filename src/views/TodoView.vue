<script setup lang="ts">
import TodoList from '@/components/TodoList.vue'
import TodoViewHeader from '@/components/TodoViewHeader.vue'
import TodoFormModal from '@/components/TodoFormModal.vue'
import type { Todo } from '@/typings/todo'
import { onMounted, ref } from 'vue'
import { createTodo, deleteTodo, getTodos, updateTodo } from '@/lib/api/todo'
import { nanoid } from 'nanoid'

const todos = ref<Todo[] | undefined>()

const todoFormModal = ref<{
  id?: string
  visible: boolean
}>({
  id: undefined,
  visible: false
})

const closeTodoFormModal = () => {
  todoFormModal.value.visible = false
}

const openTodoFormModal = (todoId?: string) => {
  todoFormModal.value.id = todoId
  todoFormModal.value.visible = true
}

const fetchTodos = async () => {
  const newTodos = await getTodos()
  todos.value = newTodos
}

const toggleDone = (todoId: string) => {
  const todo = todos.value?.find((t) => t.id === todoId)
  if (!todo) return

  todo.done = !todo.done
  updateTodo(todoId, {
    done: todo.done
  })
}

const handleTodoEdit = (todoId: string) => {
  openTodoFormModal(todoId)
}

const handleTodoDelete = async (todoId: string) => {
  await deleteTodo(todoId)
  fetchTodos()
}

const handleFormSubmit = async (title: string, desc: string) => {
  if (todoFormModal.value.id) {
    // edit todo
    const todo = {
      title,
      desc
    }

    await updateTodo(todoFormModal.value.id, todo)
  } else {
    // create todo
    const newTodo = {
      id: nanoid(),
      title,
      desc,
      done: false
    }

    await createTodo(newTodo)
  }

  await fetchTodos()
  closeTodoFormModal()
}

onMounted(() => {
  fetchTodos()
})
</script>
<template>
  <TodoFormModal
    :open="todoFormModal.visible"
    :todo-id="todoFormModal.id"
    @close="closeTodoFormModal"
    @submit="handleFormSubmit"
  />
  <TodoViewHeader @add-todo="openTodoFormModal" />
  <div class="todo-container">
    <TodoList
      v-if="todos"
      :todos="todos"
      @done="toggleDone"
      @edit="handleTodoEdit"
      @delete="handleTodoDelete"
    />
    <i v-else class="pi pi-spinner loading"></i>
  </div>
</template>

<style scoped>
.todo-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: auto;
  max-width: 1024px;
  gap: 24px;
  padding: 24px;
}

.loading {
  width: fit-content;
  height: fit-content;
  font-size: 3em;
  font-weight: bold;
  color: var(--primary);
  animation-name: loading;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes loading {
  from {
    rotate: 0deg;
  }
  to {
    rotate: 360deg;
  }
}

@media only screen and (max-width: 768px) {
  .todo-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (max-width: 480px) {
  .todo-container {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
