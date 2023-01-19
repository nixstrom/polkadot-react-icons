import * as React from 'react'
import { SVGProps } from 'react'
const Close = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M3.89935 4.10034L23.6983 23.8993" stroke="black" />
		<path d="M23.6983 4.10034L3.89931 23.8993" stroke="black" />
	</svg>
)
export default Close
