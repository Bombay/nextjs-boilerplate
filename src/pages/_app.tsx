import '@/styles/reset.scss'
import DefaultLayout from '@/layouts/DefaultLayout'
import { CustomAppProps } from '@/types/nextjs'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export default function App({ Component, pageProps }: CustomAppProps) {
	const getLayout = Component.getLayout || DefaultLayout.getLayout
	const queryClient = new QueryClient()

	return (
		<QueryClientProvider client={queryClient}>
			{getLayout(<Component {...pageProps} />)}
		</QueryClientProvider>
	)
}
