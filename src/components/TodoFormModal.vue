<script setup lang="ts">
const props = defineProps<{
  open: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()
</script>
<template>
  <div role="dialog" v-if="props.open">
    <form>
      <i class="pi pi-times close" role="button" @click="emit('close')"></i>
      <div>
        <label>title</label>
        <input type="text" />
      </div>
      <div>
        <label>desc</label>
        <input type="text" />
      </div>
      <button type="submit">ADD</button>
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
  color: white;
  background-color: var(--primary);
  font-weight: bold;
  padding: 8px 16px;
}
</style>
