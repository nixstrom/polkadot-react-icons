import * as React from 'react'
import { SVGProps } from 'react'
const MobileApp = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 20 27"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M18.5109 1.33008H2V25.3301H18.5109V1.33008Z"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path d="M9.30524 22.0423H11.205" stroke="black" strokeWidth={2.5} />
	</svg>
)
export default MobileApp
