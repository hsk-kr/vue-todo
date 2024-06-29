import type { Todo } from '@/typings/todo'

const API_URL = import.meta.env.VITE_API_URL

export const getTodos = async (): Promise<Todo[]> => await (await fetch(`${API_URL}/todos`)).json()

export const getTodo = async (todoId: string): Promise<Todo> => {
  return await (await fetch(`${API_URL}/todos/${todoId}`)).json()
}

export const updateTodo = async (todoId: string, todo: Partial<Todo>) => {
  await fetch(`${API_URL}/todos/${todoId}`, {
    method: 'PATCH',
    body: JSON.stringify(todo)
  })
}

export const deleteTodo = async (todoId: string) => {
  await fetch(`${API_URL}/todos/${todoId}`, {
    method: 'DELETE'
  })
}

export const createTodo = async (todo: Todo) => {
  await fetch(`${API_URL}/todos`, {
    method: 'POST',
    body: JSON.stringify(todo)
  })
}
