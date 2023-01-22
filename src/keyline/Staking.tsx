import * as React from 'react'
import { SVGProps } from 'react'
const Staking = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M25 12.958V16C25 20.0501 20.0751 22.875 14 22.875C7.92487 22.875 3 20.0501 3 16V12.958" />
		<path d="M14 19.6667C20.0751 19.6667 25 16.3834 25 12.3333C25 8.28325 20.0751 5 14 5C7.92487 5 3 8.28325 3 12.3333C3 16.3834 7.92487 19.6667 14 19.6667Z" />
		<path d="M11 13.5335L14.178 15.9725L17.356 13.5335" />
		<path d="M14.1998 15.203L14.1998 9" />
	</svg>
)
export default Staking
