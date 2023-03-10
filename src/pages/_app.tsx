import React from 'react'
import '@/styles/reset.scss'
import DefaultLayout from '@/layouts/DefaultLayout'
import { CustomAppProps } from '@/types/nextjs'
import {
	Hydrate,
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RecoilRoot } from 'recoil'

export default function App({ Component, pageProps }: CustomAppProps) {
	const getLayout = Component.getLayout || DefaultLayout.getLayout
	/**
	 * ssr 시 싱글톤 객체 오염 방지
	 * https://tanstack.com/query/latest/docs/react/guides/ssr
	 */
	const [queryClient] = React.useState(() => new QueryClient())
	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState}>
				<RecoilRoot>{getLayout(<Component {...pageProps} />)}</RecoilRoot>
			</Hydrate>
			{
				// @todo 환경변수 정리된 후 profile 로 분기처리
				typeof window !== 'undefined' &&
					(window.location.hostname === 'localhost' ||
						window.location.hostname === 'biskitlocal.smiledev.net') && (
						<ReactQueryDevtools initialIsOpen={false} />
					)
			}
		</QueryClientProvider>
	)
}
