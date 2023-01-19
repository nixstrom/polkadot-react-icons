import * as React from 'react'
import { SVGProps } from 'react'
const Attack = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M14 2C7.37258 2 2 7.37258 2 14C2 16.1857 2.58437 18.235 3.60539 20H7.32682V26H20.6602V20H24.3946C25.4156 18.235 26 16.1857 26 14C26 7.37258 20.6274 2 14 2Z"
			stroke="black"
			strokeWidth={2.5}
		/>
		<circle
			cx={9.28605}
			cy={13.0698}
			r={1.88557}
			stroke="black"
			strokeWidth={2.5}
		/>
		<circle
			cx={18.7139}
			cy={13.0698}
			r={1.88557}
			stroke="black"
			strokeWidth={2.5}
		/>
	</svg>
)
export default Attack
