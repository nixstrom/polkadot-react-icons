import * as React from 'react'
import { SVGProps } from 'react'
const Deposit = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M22.706 26L6 26" fill="none" data-nofill="true" />
		<path
			d="M14.4865 2L14.4865 20.5M20.0165 15.921L14.4865 21.4482L8.95172 15.9227"
			fill="none"
			data-nofill="true"
		/>
	</svg>
)
export default Deposit
