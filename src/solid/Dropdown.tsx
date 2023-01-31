import * as React from 'react'
import { SVGProps } from 'react'
const Dropdown = (props: SVGProps<SVGSVGElement>) => (
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
			d="M13.2652 20.5949C13.4545 20.8 13.7209 20.9167 14 20.9167C14.2791 20.9167 14.5455 20.8 14.7348 20.5949L25.7348 8.67828C26.0042 8.38642 26.0753 7.96278 25.916 7.59893C25.7567 7.23508 25.3972 7 25 7H2.99996C2.60276 7 2.24322 7.23508 2.08391 7.59893C1.92461 7.96278 1.99575 8.38642 2.26515 8.67828L13.2652 20.5949Z"
			stroke="none"
		/>
	</svg>
)
export default Dropdown
