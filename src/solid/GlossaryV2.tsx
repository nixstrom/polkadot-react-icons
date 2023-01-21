import * as React from 'react'
import { SVGProps } from 'react'
const GlossaryV2 = (props: SVGProps<SVGSVGElement>) => (
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
			d="M1.46284 1.15652C1.75113 0.972929 2.11322 0.949289 2.42293 1.09384L13 6.03039V26.609L1.54111 20.6907C1.20876 20.519 1 20.1763 1 19.8022V2C1 1.65822 1.17456 1.34011 1.46284 1.15652ZM15 26.609L26.4589 20.6907C26.7912 20.519 27 20.1763 27 19.8022V2C27 1.65822 26.8254 1.34011 26.5372 1.15652C26.2489 0.972929 25.8868 0.949289 25.5771 1.09384L15 6.03039V26.609Z"
			stroke="none"
		/>
	</svg>
)
export default GlossaryV2
