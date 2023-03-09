import { ReactNode } from 'react'

function MyPageLayout({ children }: { children: ReactNode }) {
	return (
		<div>
			<h1>Mypage...</h1>
			{children}
		</div>
	)
}

export default MyPageLayout

MyPageLayout.getLayout = (page: ReactNode) => (
	<MyPageLayout>{page}</MyPageLayout>
)
