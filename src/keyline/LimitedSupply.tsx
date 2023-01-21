import * as React from 'react'
import { SVGProps } from 'react'
const LimitedSupply = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M4.56793 23.4529H23.4045V6.51797H4.56793V23.4529Z" />
		<path d="M2 6.51174H26V2H2V6.51174Z" />
		<path d="M14.9603 18.876L19.351 18.8904L19.3655 14.5071" />
		<path d="M8.11823 11.1604L12.0457 14.7778L13.8051 13.0185L18.482 17.9733" />
	</svg>
)
export default LimitedSupply
