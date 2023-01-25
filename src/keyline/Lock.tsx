import * as React from 'react'
import { SVGProps } from 'react'
const Lock = (props: SVGProps<SVGSVGElement>) => (
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
			d="M8.12132 10.1541L8.12134 8.41857V8.41857C8.12134 5.42598 10.5473 3 13.5399 3V3C16.5325 3 18.9585 5.42598 18.9585 8.41857V8.41857L18.9585 10.1541"
			fill="none"
		/>
		<path d="M24.0798 10.6693H3V26H24.0798V10.6693Z" />
	</svg>
)
export default Lock
