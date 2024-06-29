<script setup lang="ts">
import { getTodo } from '@/lib/api/todo'
import { onMounted, ref, watchEffect } from 'vue'

const props = defineProps<{
  todoId?: string
  open: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'submit', title: string, desc: string): void
}>()

const form = ref<{
  title: string
  desc: string
}>({
  title: '',
  desc: ''
})

const loading = ref<boolean>(false)

const handleSubmit = () => {
  if (!form.value.title || !form.value.desc) {
    alert('Fill out input values')
    return
  }

  emit('submit', form.value.title, form.value.desc)
  loading.value = true
}

watchEffect(async () => {
  if (!props.open) return

  form.value.title = ''
  form.value.desc = ''
  if (!props.todoId) {
    loading.value = false
    return
  }

  loading.value = true
  const todo = await getTodo(props.todoId)
  form.value.title = todo.title
  form.value.desc = todo.desc
  loading.value = false
})

onMounted(async () => {})
</script>
<template>
  <div role="dialog" v-if="props.open">
    <form @submit.prevent="handleSubmit">
      <i class="pi pi-times close" role="button" @click="emit('close')"></i>
      <div>
        <label>title</label>
        <input type="text" v-model="form.title" :disabled="loading" />
      </div>
      <div>
        <label>desc</label>
        <input type="text" v-model="form.desc" :disabled="loading" />
      </div>
      <button type="submit" :disabled="loading">ADD</button>
    </form>
  </div>
</template>

<style scoped>
div[role='dialog'] {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100svw;
  height: 100svh;
  display: flex;
  justify-content: center;
  padding-top: 10%;
  padding-left: 24px;
  padding-right: 24px;
  background-color: #00000040;
  z-index: 1;
}

.close {
  position: absolute;
  right: 8px;
  top: 8px;
  color: #aaa;
  cursor: pointer;
  transition: all 0.5s;
}

.close:hover {
  scale: 1.1;
  color: black;
}

form {
  position: relative;
  max-width: 768px;
  background-color: white;
  padding: 24px 24px;
  padding-top: 36px;
  border-radius: 8px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

form > div {
  display: flex;
  align-items: center;
  gap: 4px;
}

form label {
  min-width: 60px;
  font-size: 1em;
  text-transform: capitalize;
}

form input[type='text'] {
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  color: var(--text);
}

form button[type='submit'] {
  cursor: pointer;
  color: white;
  background-color: var(--primary);
  font-weight: bold;
  padding: 8px 16px;
  transition: all 0.5s;
}

form button[type='submit']:hover:not(:disabled) {
  opacity: var(--hover-opacity);
}

form button[type='submit']:disabled {
  background-color: #ccc;
  color: #aaa;
  cursor: default;
}
</style>
