import * as React from 'react'
import { SVGProps } from 'react'
const Check = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M25.7129 6.29877C26.1002 6.69251 26.095 7.32566 25.7012 7.71293L11.4676 21.7129C11.0894 22.0849 10.4866 22.0969 10.094 21.7402L2.32766 14.6862C1.91884 14.3148 1.88844 13.6824 2.25977 13.2736C2.6311 12.8647 3.26353 12.8344 3.67236 13.2057L10.739 19.6242L24.2988 6.28707C24.6925 5.89979 25.3257 5.90503 25.7129 6.29877Z"
			stroke="none"
		/>
	</svg>
)
export default Check
