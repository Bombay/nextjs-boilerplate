import { atom } from 'recoil'

export interface ITodo {
	id: number
	text: string
	done: boolean
}

export type OnToggle = (id: ITodo['id']) => void

export const todoListAtom = atom<ITodo[]>({
	key: 'todoList',
	default: [],
})
