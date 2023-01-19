import * as React from 'react'
import { SVGProps } from 'react'
const BlockExplorerV2 = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 22 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M10.831 19.662C15.7088 19.662 19.662 15.7078 19.662 10.831C19.662 5.95423 15.7088 2 10.831 2C5.95327 2 2 5.95423 2 10.831C2 15.7078 5.95423 19.662 10.831 19.662Z"
			stroke="black"
			strokeMiterlimit={10}
		/>
		<path
			d="M7.87037 7.93085H13.6735V13.7302H7.87037V7.93085Z"
			stroke="black"
		/>
		<path
			d="M16.7446 17.3763C15.5887 18.4218 14.1612 19.1706 12.5734 19.4883L16.3318 26L20.3734 23.6662L16.7446 17.3763Z"
			stroke="black"
			strokeMiterlimit={10}
		/>
	</svg>
)
export default BlockExplorerV2
