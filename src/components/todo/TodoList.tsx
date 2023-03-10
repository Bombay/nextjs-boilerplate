import { ITodo, OnToggle } from '@/modules/todo'
import Todo from '@/components/todo/Todo'

interface TodoListProps {
	todoList: ITodo[]
	onToggle: OnToggle
}

function TodoList({ todoList, onToggle }: TodoListProps) {
	return (
		<ul>
			{todoList.map((todo) => (
				<Todo key={todo.id} todo={todo} onToggle={onToggle} />
			))}
		</ul>
	)
}

export default TodoList
