import * as React from 'react'
import { SVGProps } from 'react'
const ChevronUp = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 24 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M0.353701 14.8939C-0.0677288 14.537 -0.119998 13.9059 0.236954 13.4845L11.248 0.484518C11.4381 0.260061 11.7174 0.130693 12.0115 0.130838C12.3057 0.130983 12.5849 0.260629 12.7748 0.485274L23.7637 13.4853C24.1203 13.9071 24.0674 14.538 23.6456 14.8945C23.2238 15.2511 22.5928 15.1982 22.2363 14.7764L12.0103 2.67896L1.76309 14.7772C1.40614 15.1986 0.775132 15.2509 0.353701 14.8939Z"
		/>
	</svg>
)
export default ChevronUp
