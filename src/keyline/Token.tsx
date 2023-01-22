import * as React from 'react'
import { SVGProps } from 'react'
const Token = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 29"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M26 12.761V16.066C26 20.4843 20.6274 23.566 14 23.566C7.37258 23.566 2 20.4843 2 16.066V12.761" />
		<path d="M14 20.0801C20.627 20.0801 26 16.4981 26 12.0801C26 7.66208 20.627 4.08008 14 4.08008C7.373 4.08008 2 7.66208 2 12.0801C2 16.4981 7.373 20.0801 14 20.0801Z" />
	</svg>
)
export default Token
