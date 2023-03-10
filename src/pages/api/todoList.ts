// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ITodo } from '@/modules/todo'

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<ITodo[]>,
) {
	res.status(200).json([
		{
			id: 1,
			text: '빨래하기',
			done: false,
		},
		{
			id: 2,
			text: '빨래하기',
			done: false,
		},
	])
}
