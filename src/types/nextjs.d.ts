import type { NextComponentType } from 'next'
import type { AppProps } from 'next/app'
import { ReactNode } from 'react'

type CustomAppProps = AppProps & {
	Component: NextComponentType & {
		/**
		 * dynamic layout 용도
		 * @param page page component
		 */
		getLayout?: (page: ReactNode) => ReactNode
	}
}
