import * as React from 'react'
import { SVGProps } from 'react'
const Help = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 26 27"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M13 25.6758C19.6274 25.6758 25 20.3032 25 13.6758C25 7.04836 19.6274 1.67578 13 1.67578C6.37258 1.67578 1 7.04836 1 13.6758C1 20.3032 6.37258 25.6758 13 25.6758Z"
			stroke="black"
		/>
		<path
			d="M13.0047 18.395C15.6109 18.395 17.7237 16.2823 17.7237 13.676C17.7237 11.0698 15.6109 8.95705 13.0047 8.95705C10.3985 8.95705 8.28571 11.0698 8.28571 13.676C8.28571 16.2823 10.3985 18.395 13.0047 18.395Z"
			fill="white"
			stroke="black"
		/>
		<path
			d="M9.85687 2.6758L12.3569 8.6758M16.1426 2.6758L13.6426 8.6758"
			stroke="black"
		/>
		<path
			d="M16.1427 24.6758L13.6427 18.6758M9.85699 24.6758L12.357 18.6758"
			stroke="black"
		/>
		<path
			d="M23.9997 10.533L17.9997 13.033M23.9997 16.8187L17.9997 14.3187"
			stroke="black"
		/>
		<path
			d="M1.99988 16.8186L7.99988 14.3187M1.99988 10.5329L7.99988 13.0329"
			stroke="black"
		/>
	</svg>
)
export default Help
