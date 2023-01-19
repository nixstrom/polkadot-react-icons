import * as React from 'react'
import { SVGProps } from 'react'
const ScamAlert = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M13.9898 2.12793L2.19775 23.872H25.7818L13.9898 2.12793Z"
			stroke="black"
			strokeMiterlimit={10}
		/>
		<path
			d="M11.2275 16.3172C11.2275 17.8504 12.4704 19.0933 14.0036 19.0933C15.5368 19.0933 16.7796 17.8504 16.7796 16.3172C16.7796 15.1286 16.0326 14.1144 14.9824 13.7186C14.4656 13.5239 14.0036 13.0934 14.0036 12.5412V3.3623"
			stroke="black"
		/>
	</svg>
)
export default ScamAlert
