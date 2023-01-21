import * as React from 'react'
import { SVGProps } from 'react'
const BlockExplorerV2 = (props: SVGProps<SVGSVGElement>) => (
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
			d="M13.831 19.662C18.7088 19.662 22.662 15.7078 22.662 10.831C22.662 5.95423 18.7088 2 13.831 2C8.95327 2 5 5.95423 5 10.831C5 15.7078 8.95423 19.662 13.831 19.662Z"
			strokeMiterlimit={10}
		/>
		<path d="M10.8704 7.93085H16.6735V13.7302H10.8704V7.93085Z" />
		<path
			d="M19.7446 17.3763C18.5887 18.4218 17.1612 19.1706 15.5734 19.4883L19.3318 26L23.3734 23.6662L19.7446 17.3763Z"
			strokeMiterlimit={10}
		/>
	</svg>
)
export default BlockExplorerV2
