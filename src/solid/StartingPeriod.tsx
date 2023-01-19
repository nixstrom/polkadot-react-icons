import * as React from 'react'
import { SVGProps } from 'react'
const StartingPeriod = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 26 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M26 13C26 20.1797 20.1797 26 13 26C5.8203 26 0 20.1797 0 13C0 5.8203 5.8203 0 13 0C20.1797 0 26 5.8203 26 13ZM13.8815 5.0675C13.8815 4.51522 13.4337 4.06751 12.8815 4.06752C12.3292 4.06752 11.8815 4.51524 11.8815 5.06753L11.8816 13.0761C11.8816 13.6284 12.3293 14.0761 12.8816 14.0761C13.4339 14.0761 13.8816 13.6284 13.8816 13.0761L13.8815 5.0675Z"
		/>
	</svg>
)
export default StartingPeriod
