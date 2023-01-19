import * as React from 'react'
import { SVGProps } from 'react'
const Lock = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 22 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M10.5678 0C7.14693 0 4.37374 2.77319 4.37373 6.19409V6.1941L4.37372 7.63106H1C0.447715 7.63106 0 8.07877 0 8.63106V23.079C0 23.6313 0.447715 24.079 1 24.079H20.6421C21.1944 24.079 21.6421 23.6313 21.6421 23.079V8.63106C21.6421 8.07877 21.1944 7.63106 20.6421 7.63106H16.7619L16.7619 6.1941C16.7619 2.77319 13.9887 0 10.5678 0ZM14.7619 7.63106L14.7619 6.1941C14.7619 3.87776 12.8842 2 10.5678 2C8.2515 2 6.37373 3.87776 6.37373 6.1941H5.37373L6.37373 6.19411L6.37372 7.63106H14.7619Z"
		/>
	</svg>
)
export default Lock
