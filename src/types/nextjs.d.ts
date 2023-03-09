import type { NextComponentType } from 'next'
import type { AppProps } from 'next/app'
import { ReactNode } from 'react'

type CustomAppProps = AppProps & {
	Component: NextComponentType & {
		getLayout?: (page: ReactNode) => ReactNode
	}
}
