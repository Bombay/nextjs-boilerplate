import { ReactNode } from 'react'

function DefaultLayout({ children }: { children: ReactNode }) {
	return <div>{children}</div>
}

export default DefaultLayout

DefaultLayout.getLayout = (page: ReactNode) => (
	<DefaultLayout>{page}</DefaultLayout>
)
