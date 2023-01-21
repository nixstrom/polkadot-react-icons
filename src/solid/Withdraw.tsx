import * as React from 'react'
import { SVGProps } from 'react'
const Withdraw = (props: SVGProps<SVGSVGElement>) => (
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
			d="M8.24479 6.81997C7.85417 7.21039 7.85401 7.84356 8.24444 8.23418C8.63487 8.6248 9.26803 8.62496 9.65865 8.23453L13.4817 4.41337V21.4482C13.4817 22.0005 13.9294 22.4482 14.4817 22.4482C15.034 22.4482 15.4817 22.0005 15.4817 21.4482V4.41135L19.31 8.23321C19.7008 8.6234 20.334 8.62287 20.7242 8.23202C21.1144 7.84117 21.1138 7.20801 20.723 6.81781L15.1882 1.2923C14.7977 0.902403 14.1651 0.90259 13.7748 1.29272L8.24479 6.81997ZM22.706 25L6 25C5.44772 25 5 25.4477 5 26C5 26.5523 5.44772 27 6 27L22.706 27C23.2583 27 23.706 26.5523 23.706 26C23.706 25.4477 23.2583 25 22.706 25Z"
			stroke="none"
		/>
	</svg>
)
export default Withdraw
