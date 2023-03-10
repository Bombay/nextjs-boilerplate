import { useRecoilState } from 'recoil'
import { OnToggle, todoListAtom } from '@/modules/todo'
import TodoListTemplate from '@/components/todo/TodoListTemplate'
import TodoList from '@/components/todo/TodoList'

function TodoListContainer() {
	const [todoList, setTodoList] = useRecoilState(todoListAtom)
	// const { isLoading, data: todoList } = useQuery(['todoList'], fetchTodoList)

	const onToggle: OnToggle = (id) =>
		setTodoList((list) =>
			list.map((todo) => ({
				...todo,
				done: id === todo.id ? !todo.done : todo.done,
			})),
		)
	return (
		<TodoListTemplate>
			<TodoList todoList={todoList} onToggle={onToggle} />
		</TodoListTemplate>
	)
}

export default TodoListContainer
