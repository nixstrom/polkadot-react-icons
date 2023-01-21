import * as React from 'react'
import { SVGProps } from 'react'
const Collapse = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 29 29"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M8.00927 25.9096L14.5662 18.0334L21.1362 25.9096"
			fill="none"
			data-nofill="true"
		/>
		<path
			d="M21.1357 3.13086L14.5525 11.0334L7.9824 3.13086"
			fill="none"
			data-nofill="true"
		/>
	</svg>
)
export default Collapse
