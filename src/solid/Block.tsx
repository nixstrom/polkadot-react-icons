import * as React from 'react'
import { SVGProps } from 'react'
const Block = (props: SVGProps<SVGSVGElement>) => (
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
			d="M0.999954 14C0.999954 6.8203 6.82025 1 14 1C17.3603 1 20.4228 2.27497 22.7303 4.36754L4.12534 22.4557C2.17698 20.1825 0.999954 17.2287 0.999954 14ZM5.53934 23.8704C7.81319 25.8213 10.7689 27 14 27C21.1797 27 27 21.1797 27 14C27 10.9006 25.9153 8.05446 24.1048 5.82059L5.53934 23.8704Z"
			stroke="none"
		/>
	</svg>
)
export default Block
