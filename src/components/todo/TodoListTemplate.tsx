import { ReactNode } from 'react'

function TodoListTemplate({ children }: { children: ReactNode }) {
	return (
		<div>
			{children}
			<style jsx>{`
				div {
					width: 500px;
					height: 500px;
					background-color: whitesmoke;
					margin: 0 auto;
				}
			`}</style>
		</div>
	)
}

export default TodoListTemplate
