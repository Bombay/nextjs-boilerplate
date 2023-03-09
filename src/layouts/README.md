# Layouts

## 레이아웃 생성

```tsx
import { ReactNode } from 'react'

function DefaultLayout({ children }: { children: ReactNode }) {
	return <div>{children}</div>
}

export default DefaultLayout

// !! 반드시 getLayout 함수가 있어야 한다.
DefaultLayout.getLayout = (page: ReactNode) => (
	<DefaultLayout>{page}</DefaultLayout>
)
```


## 레이아웃 적용

모든 레이아웃은 `pages/_app.tsx` 에서 적용된다.

```tsx
import '@/styles/reset.scss'
import DefaultLayout from '@/layouts/DefaultLayout'
import { CustomAppProps } from '@/types/nextjs'

export default function App({ Component, pageProps }: CustomAppProps) {
	const getLayout = Component.getLayout || DefaultLayout.getLayout
	return getLayout(<Component {...pageProps} />)
}
```


## 다이나믹 레이아웃
```tsx
// pages/MyPage.tsx
// 이 페이지 진입 시 DefaultLayout.tsx 기본 레이아웃이 아닌 MyPageLayout.tsx 를 사용하고 싶다고 가정
import MyPageLayout from '@/layouts/MyPageLayout.tsx'

function MyPage() {
	return <div>
		{/* mypage info */}
	</div>
}

MyPage.getLayout = MyPageLayout.getLayout

```

```tsx
// layouts/MyPageLayout.tsx
function MyPageLayout({ children }: { children: ReactNode }) {
	return <div>
		<MyPageNav />
		{children}
	</div>
}

MyPageLayout.getLayout = (page: ReactNode) => (
	<DefaultLayout>{page}</DefaultLayout>
)
```
