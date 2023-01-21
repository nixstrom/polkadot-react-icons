import * as React from 'react'
import { SVGProps } from 'react'
const ChevronDown = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 29 29"
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
			d="M26.6346 7.79945C27.056 8.15641 27.1083 8.78741 26.7513 9.20884L15.7403 22.2088C15.5502 22.4333 15.2709 22.5627 14.9767 22.5625C14.6826 22.5624 14.4034 22.4327 14.2135 22.2081L3.22455 9.20808C2.86802 8.7863 2.92091 8.15535 3.3427 7.79881C3.76448 7.44228 4.39543 7.49517 4.75197 7.91696L14.978 20.0144L25.2252 7.9162C25.5821 7.49477 26.2131 7.4425 26.6346 7.79945Z"
			stroke="none"
		/>
	</svg>
)
export default ChevronDown
