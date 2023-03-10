import { NextPageContext } from 'next'

/**
 * 500 및 기타 에러페이지
 * ! production 모드(라이브 환경)에서만 노출됩니다.
 * https://nextjs.org/docs/advanced-features/custom-error-page
 *
 * @param statusCode
 * @constructor
 */
function Error({ statusCode }: { statusCode: number }) {
	return (
		<p>
			{statusCode
				? `An error ${statusCode} occurred on server`
				: 'An error occurred on client'}
		</p>
	)
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404
	return { statusCode }
}

export default Error
