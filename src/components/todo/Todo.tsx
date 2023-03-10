import { ITodo, OnToggle } from '@/modules/todo'

interface TodoProps {
	todo: ITodo
	onToggle: OnToggle
}

function Todo({ todo, onToggle }: TodoProps) {
	return <li onClick={() => onToggle(todo.id)}>{todo.text}</li>
}

export default Todo
