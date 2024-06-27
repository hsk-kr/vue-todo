import type { Todo } from '@/typings/todo'

const API_URL = import.meta.env.VUE_APP_API_URL

export const getTodos = async (): Promise<Todo[]> => await (await fetch(`${API_URL}/todos`)).json()
