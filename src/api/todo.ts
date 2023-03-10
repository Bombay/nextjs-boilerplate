import { ITodo } from '@/modules/todo'

export async function fetchTodoList(): Promise<ITodo[]> {
	return (await fetch('/api/todoList')).json()
}
