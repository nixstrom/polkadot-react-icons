import * as React from 'react'
import { SVGProps } from 'react'
const Randomness = (props: SVGProps<SVGSVGElement>) => (
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
			d="M1.25914 7L4.48384 7C7.25724 7 9.83277 8.43641 11.2902 10.796L15.2481 17.204C16.7056 19.5636 19.2811 21 22.0545 21L24 21L25.5 21"
			fill="none"
			data-nofill="true"
		/>
		<path
			d="M22.3968 17L26.24 20.9998L22.3968 25"
			fill="none"
			data-nofill="true"
		/>
		<path
			d="M1.25914 21L4.48384 21C7.25724 21 9.83277 19.5636 11.2902 17.204L15.2481 10.796C16.7056 8.43642 19.2811 7 22.0545 7L24 7L25.5 7"
			fill="none"
			data-nofill="true"
		/>
		<path
			d="M22.3968 11L26.24 7.0002L22.3968 3"
			fill="none"
			data-nofill="true"
		/>
	</svg>
)
export default Randomness
