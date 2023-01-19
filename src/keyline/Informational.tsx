import * as React from 'react'
import { SVGProps } from 'react'
const Informational = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 27"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M13.9883 25.6758C20.6157 25.6758 25.9883 20.3032 25.9883 13.6758C25.9883 7.04836 20.6157 1.67578 13.9883 1.67578C7.36086 1.67578 1.98828 7.04836 1.98828 13.6758C1.98828 20.3032 7.36086 25.6758 13.9883 25.6758Z"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M13.998 12.082L14.0075 19.2122"
			stroke="black"
			strokeWidth={2.5}
			strokeMiterlimit={10}
		/>
		<path
			d="M13.9881 7.67574L14.0063 7.69388"
			stroke="black"
			strokeWidth={2.5}
			strokeMiterlimit={10}
		/>
	</svg>
)
export default Informational
