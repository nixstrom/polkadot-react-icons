import * as React from 'react'
import { SVGProps } from 'react'
const Save = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 29"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<g>
			<path
				d="M26 10.3145L26 26.9434L2 26.9434L2 2.94336L18.3436 2.94336L26 10.3145Z"
				strokeMiterlimit={10}
			/>
			<path d="M10.5714 3.5V11.5148H2.5" strokeMiterlimit={10} />
			<path d="M16.4643 18.0862C16.4643 19.605 15.2331 20.8362 13.7143 20.8362C12.1955 20.8362 10.9643 19.605 10.9643 18.0862C10.9643 16.5675 12.1955 15.3362 13.7143 15.3362C15.2331 15.3362 16.4643 16.5675 16.4643 18.0862Z" />
		</g>
	</svg>
)
export default Save
