import * as React from 'react'
import { SVGProps } from 'react'
const Isolated = (props: SVGProps<SVGSVGElement>) => (
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
		<circle
			cx={6.51454}
			cy={12.0567}
			r={3.19226}
			transform="rotate(45 6.51454 12.0567)"
		/>
		<circle
			cx={6.51454}
			cy={21.4854}
			r={3.19226}
			transform="rotate(45 6.51454 21.4854)"
		/>
		<circle
			cx={21.4858}
			cy={6.51454}
			r={3.19226}
			transform="rotate(45 21.4858 6.51454)"
		/>
		<circle
			cx={15.9432}
			cy={21.4854}
			r={3.19226}
			transform="rotate(45 15.9432 21.4854)"
		/>
	</svg>
)
export default Isolated
